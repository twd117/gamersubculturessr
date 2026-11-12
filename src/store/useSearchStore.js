import { defineStore } from 'pinia';
import db from '../dbclient/dbclient.js';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    allItems: [],
    isLoaded: false,
    isLoading: false,
    error: null,
    searchQuery: '',
    activeCategory: 'all',
    sortBy: 'relevance',
  }),

  actions: {
    async ensureLoaded() {
      if (this.isLoaded || this.isLoading) return;
      this.isLoading = true;
      this.error = null;

      try {
        const [gamesSnap, newsSnap, entSnap, smlcSnap] = await Promise.all([
          getDocs(query(collection(db, 'articles'), orderBy('_createdAt', 'desc'), limit(60))),
          getDocs(query(collection(db, 'news'), orderBy('date', 'desc'), limit(60))),
          getDocs(query(collection(db, 'entertainment'), orderBy('date', 'desc'), limit(60))),
          getDocs(query(collection(db, 'smlc'), orderBy('date', 'desc'), limit(60))),
        ]);

        const items = [];

        gamesSnap.forEach((doc) => {
          const d = doc.data();
          items.push({
            id: doc.id,
            title: d.title || '',
            sub: d.subtitle || '',
            story: d.story || '',
            analyse: d.analyse || '',
            dev: d.dev || '',
            platform: d.platform || '',
            tag: d.tag || '',
            rating: d.rating || 0,
            date: d._createdAt || null,
            img: d.img || [],
            imgurl: (d.img && d.img[0] && d.img[0].downloadURL) || d.imgurl || '',
            category: 'games',
            categoryLabel: 'Games',
            routeName: 'Article',
          });
        });

        newsSnap.forEach((doc) => {
          const d = doc.data();
          items.push({
            id: doc.id,
            title: d.title || '',
            sub: d.subtitle || '',
            story: d.story || '',
            analyse: '',
            dev: '',
            platform: '',
            tag: d.tag || '',
            rating: d.rating || 0,
            date: d.date || null,
            img: d.img || [],
            imgurl: (d.img && d.img[0] && d.img[0].downloadURL) || d.imgurl || '',
            category: 'tech',
            categoryLabel: 'Tech',
            routeName: 'news',
          });
        });

        entSnap.forEach((doc) => {
          const d = doc.data();
          items.push({
            id: doc.id,
            title: d.title || '',
            sub: d.subtitle || '',
            story: '',
            analyse: d.analyse || '',
            dev: '',
            platform: '',
            tag: d.tag || '',
            rating: d.rating || 0,
            date: d.date || null,
            img: d.img || [],
            imgurl: (d.img && d.img[0] && d.img[0].downloadURL) || d.imgurl || '',
            category: 'entertainment',
            categoryLabel: 'Entertainment',
            routeName: 'Sciences',
          });
        });

        smlcSnap.forEach((doc) => {
          const d = doc.data();
          items.push({
            id: doc.id,
            title: d.title || '',
            sub: d.subtitle || '',
            story: '',
            analyse: d.analyse || '',
            dev: '',
            platform: '',
            tag: d.tag || '',
            rating: d.rating || 0,
            date: d.date || null,
            img: d.img || [],
            imgurl: (d.img && d.img[0] && d.img[0].downloadURL) || d.imgurl || '',
            category: 'smlc',
            categoryLabel: 'Others',
            routeName: 'smlc',
          });
        });

        this.allItems = items;
        this.isLoaded = true;
      } catch (err) {
        console.error('Error loading search index:', err);
        this.error = 'Failed to load articles for search.';
      } finally {
        this.isLoading = false;
      }
    },

    getResults(rawQuery, categoryFilter = 'all', sortMode = 'relevance') {
      const q = (rawQuery || '').trim().toLowerCase();
      if (!q) return [];

      const terms = q.split(/\s+/).filter(Boolean);

      const matched = [];
      for (const item of this.allItems) {
        if (categoryFilter !== 'all' && item.category !== categoryFilter) {
          continue;
        }

        const titleLower = (item.title || '').toLowerCase();
        const subLower = (item.sub || '').toLowerCase();
        const tagLower = (item.tag || '').toLowerCase();
        const devLower = (item.dev || '').toLowerCase();
        const platformLower = (item.platform || '').toLowerCase();
        const bodyLower = ((item.story || '') + ' ' + (item.analyse || '')).toLowerCase();

        let score = 0;
        let allTermsMatched = true;

        if (titleLower.includes(q)) score += 50;
        if (tagLower.includes(q)) score += 30;
        if (subLower.includes(q)) score += 20;

        for (const term of terms) {
          let termScore = 0;
          if (titleLower.includes(term)) termScore += 20;
          if (tagLower.includes(term)) termScore += 15;
          if (subLower.includes(term)) termScore += 10;
          if (devLower.includes(term) || platformLower.includes(term)) termScore += 8;
          if (bodyLower.includes(term)) termScore += 3;

          if (termScore === 0) {
            allTermsMatched = false;
            break;
          }
          score += termScore;
        }

        if (allTermsMatched && score > 0) {
          const seconds = item.date && item.date.seconds ? item.date.seconds : 0;
          matched.push({ ...item, _score: score, _timestamp: seconds });
        }
      }

      if (sortMode === 'date') {
        matched.sort((a, b) => b._timestamp - a._timestamp);
      } else {
        matched.sort((a, b) => b._score - a._score || b._timestamp - a._timestamp);
      }

      return matched;
    },
  },
});

