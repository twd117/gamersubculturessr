<template>
  <div class="md-search-page">
    <Box>
      <Header @click="onHeaderInteract" />

      <!-- Material Design Search Control Surface -->
      <section class="md-search-surface">
        <div class="md-search-header-row">
          <router-link :to="{ name: 'Home' }" class="md-back-btn" title="Back to Home">
            <i class="material-icons">arrow_back</i>
            <span>Home</span>
          </router-link>
          <h1 class="md-search-heading">Search Articles</h1>
        </div>

        <form class="md-main-search-box" @submit.prevent="applySearch">
          <i class="material-icons md-main-search-icon">search</i>
          <input
            v-model="queryInput"
            type="text"
            class="md-main-search-input"
            placeholder="Search by title, topic, tag, developer, or platform..."
            aria-label="Search query"
          />
          <button
            v-if="queryInput.length > 0"
            type="button"
            class="md-clear-btn"
            aria-label="Clear"
            @click="clearQuery"
          >
            <i class="material-icons">close</i>
          </button>
          <button type="submit" class="md-submit-btn">
            <span>Search</span>
          </button>
        </form>

        <!-- Material Design Filter Chips & Sort Bar -->
        <div class="md-controls-bar">
          <div class="md-chips-group" role="tablist" aria-label="Filter by category">
            <button
              v-for="cat in categories"
              :key="cat.value"
              type="button"
              class="md-filter-chip"
              :class="{ 'md-chip-selected': selectedCategory === cat.value }"
              @click="selectedCategory = cat.value"
            >
              <i v-if="selectedCategory === cat.value" class="material-icons md-chip-check">
                check
              </i>
              <i v-else class="material-icons md-chip-icon">{{ cat.icon }}</i>
              <span>{{ cat.label }}</span>
              <span v-if="activeQuery" class="md-chip-count">
                {{ getCategoryCount(cat.value) }}
              </span>
            </button>
          </div>

          <div class="md-sort-group">
            <i class="material-icons md-sort-icon">sort</i>
            <label for="md-sort-select" class="md-sort-label">Sort by:</label>
            <select id="md-sort-select" v-model="sortBy" class="md-sort-select">
              <option value="relevance">Relevance</option>
              <option value="date">Newest First</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Material Indeterminate Progress Bar while loading -->
      <div v-if="searchStore.isLoading" class="md-loading-state">
        <div class="md-progress-track">
          <div class="md-progress-bar"></div>
        </div>
        <p class="md-loading-text">Searching Gamersub library...</p>
      </div>

      <!-- Results Summary & Grid -->
      <section v-else class="md-results-section">
        <div v-if="activeQuery" class="md-results-summary">
          <p>
            Showing <strong>{{ filteredResults.length }}</strong>
            {{ filteredResults.length === 1 ? 'result' : 'results' }} for
            <span class="md-query-highlight">"{{ activeQuery }}"</span>
          </p>
        </div>

        <!-- Results Grid -->
        <div v-if="displayedResults.length > 0" class="md-results-grid">
          <article
            v-for="item in displayedResults"
            :key="item.category + '-' + item.id"
            class="md-result-card"
          >
            <router-link
              :to="{ name: item.routeName, params: { id: item.id, title: item.title } }"
              class="md-card-link"
            >
              <div class="md-card-media">
                <img
                  v-if="item.imgurl"
                  :src="item.imgurl"
                  :alt="item.title"
                  class="md-card-img"
                  loading="lazy"
                />
                <div v-else class="md-card-img-placeholder">
                  <i class="material-icons">article</i>
                </div>
                <span class="md-category-badge" :class="'md-badge-' + item.category">
                  {{ item.categoryLabel }}
                </span>
              </div>

              <div class="md-card-body">
                <div class="md-card-meta-top">
                  <span v-if="item.date && item.date.seconds" class="md-card-date">
                    <i class="material-icons">schedule</i>
                    {{ formatDate(item.date.seconds) }}
                  </span>
                  <div v-if="parseInt(item.rating) > 0" class="md-card-stars">
                    <i
                      v-for="n in Math.min(parseInt(item.rating), 5)"
                      :key="n"
                      class="material-icons md-star-icon"
                    >
                      star
                    </i>
                  </div>
                </div>

                <h2 class="md-card-title">{{ item.title }}</h2>
                <p v-if="item.sub" class="md-card-subtitle">{{ item.sub }}</p>

                <div class="md-card-footer">
                  <span v-if="item.tag" class="md-tag-chip">
                    <i class="material-icons">label</i>
                    {{ item.tag }}
                  </span>
                  <span class="md-read-more">
                    Read Article
                    <i class="material-icons">arrow_forward</i>
                  </span>
                </div>
              </div>
            </router-link>
          </article>
        </div>

        <!-- Load More Button -->
        <div v-if="filteredResults.length > visibleCount" class="md-pagination-wrap">
          <button type="button" class="md-load-more-btn" @click="loadMore">
            <span>Load More Results</span>
            <i class="material-icons">expand_more</i>
          </button>
        </div>

        <!-- Empty State when query has no matches -->
        <div v-else-if="activeQuery && filteredResults.length === 0" class="md-empty-state">
          <div class="md-empty-icon-circle">
            <i class="material-icons">search_off</i>
          </div>
          <h3 class="md-empty-title">No matching articles found</h3>
          <p class="md-empty-subtitle">
            We couldn't find any articles matching "<strong>{{ activeQuery }}</strong>"
            <span v-if="selectedCategory !== 'all'">in the selected category</span>.
          </p>
          <div class="md-empty-actions">
            <button
              v-if="selectedCategory !== 'all'"
              type="button"
              class="md-outlined-btn"
              @click="selectedCategory = 'all'"
            >
              Search All Categories
            </button>
            <router-link :to="{ name: 'Home' }" class="md-text-btn">
              Browse Latest News
            </router-link>
          </div>
        </div>

        <!-- Initial Prompt State when no query is entered yet -->
        <div v-else-if="!activeQuery" class="md-empty-state">
          <div class="md-empty-icon-circle">
            <i class="material-icons">travel_explore</i>
          </div>
          <h3 class="md-empty-title">Explore Gamersub</h3>
          <p class="md-empty-subtitle">
            Enter a keyword above to search across Games, Entertainment, Tech, and Subculture articles.
          </p>
        </div>
      </section>
    </Box>

    <Footer />
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';
import moment from 'moment';
import BoxVue from '../components/Box.vue';
import HeaderVue from '../components/Header.vue';
import FooterVue from '../components/Footer.vue';
import { useSearchStore } from '../store/useSearchStore.js';

export default {
  name: 'SearchView',
  components: {
    Box: BoxVue,
    Header: HeaderVue,
    Footer: FooterVue,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const searchStore = useSearchStore();

    const activeQuery = ref(route.query.q ? String(route.query.q) : '');
    const queryInput = ref(activeQuery.value);
    const selectedCategory = ref('all');
    const sortBy = ref('relevance');
    const visibleCount = ref(12);

    const categories = [
      { label: 'All', value: 'all', icon: 'apps' },
      { label: 'Games', value: 'games', icon: 'sports_esports' },
      { label: 'Entertainment', value: 'entertainment', icon: 'movie' },
      { label: 'Tech', value: 'tech', icon: 'memory' },
      { label: 'Others', value: 'smlc', icon: 'auto_awesome' },
    ];

    useHead({
      title: computed(() =>
        activeQuery.value ? `Search: ${activeQuery.value} - Gamersub` : 'Search - Gamersub'
      ),
      meta: [
        {
          name: 'description',
          content: computed(() =>
            activeQuery.value
              ? `Search results for ${activeQuery.value} on Gamersub.`
              : 'Search gaming, tech, and entertainment articles on Gamersub.'
          ),
        },
      ],
    });

    watch(
      () => route.query.q,
      (newQ) => {
        const val = newQ ? String(newQ) : '';
        activeQuery.value = val;
        queryInput.value = val;
        visibleCount.value = 12;
      }
    );

    watch([selectedCategory, sortBy], () => {
      visibleCount.value = 12;
    });

    const filteredResults = computed(() => {
      if (!activeQuery.value) return [];
      return searchStore.getResults(activeQuery.value, selectedCategory.value, sortBy.value);
    });

    const displayedResults = computed(() => {
      return filteredResults.value.slice(0, visibleCount.value);
    });

    const getCategoryCount = (catValue) => {
      if (!activeQuery.value) return 0;
      return searchStore.getResults(activeQuery.value, catValue, sortBy.value).length;
    };

    const applySearch = () => {
      const trimmed = queryInput.value.trim();
      activeQuery.value = trimmed;
      visibleCount.value = 12;
      router.push({ name: 'Search', query: trimmed ? { q: trimmed } : {} });
    };

    const clearQuery = () => {
      queryInput.value = '';
      activeQuery.value = '';
      router.push({ name: 'Search', query: {} });
    };

    const loadMore = () => {
      visibleCount.value += 12;
    };

    const formatDate = (seconds) => {
      if (!seconds) return '';
      return moment(new Date(seconds * 1000)).format('MMM DD, YYYY');
    };

    const onHeaderInteract = (event) => {
      const target = event.target.closest('.nav-link');
      if (target) {
        router.push({ name: 'Home' });
      }
    };

    onMounted(() => {
      searchStore.ensureLoaded();
    });

    return {
      searchStore,
      activeQuery,
      queryInput,
      selectedCategory,
      sortBy,
      visibleCount,
      categories,
      filteredResults,
      displayedResults,
      getCategoryCount,
      applySearch,
      clearQuery,
      loadMore,
      formatDate,
      onHeaderInteract,
    };
  },
};
</script>

<style scoped>
.md-search-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

/* Material Elevated Search Surface */
.md-search-surface {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 32px;
  margin-top: 24px;
  margin-bottom: 28px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid #e0e0e0;
  text-align: left;
}

.md-search-header-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.md-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: #f1f3f4;
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.md-back-btn:hover {
  background-color: rgba(255, 122, 48, 0.12);
  color: #FF7A30;
}

.md-back-btn .material-icons {
  font-size: 18px;
  margin: 0;
  color: inherit;
}

.md-search-heading {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
}

/* Main Material Search Box */
.md-main-search-box {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border: 2px solid transparent;
  border-radius: 32px;
  padding: 4px 6px 4px 18px;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.md-main-search-box:focus-within {
  background: #ffffff;
  border-color: #FF7A30;
  box-shadow: 0 4px 12px rgba(255, 122, 48, 0.16);
}

.md-main-search-icon {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.54);
  margin-right: 10px;
}

.md-main-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  padding: 10px 4px;
}

.md-clear-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  margin-right: 4px;
  transition: background-color 0.15s ease;
}

.md-clear-btn:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.87);
}

.md-clear-btn .material-icons {
  font-size: 20px;
  margin: 0;
}

.md-submit-btn {
  height: 42px;
  padding: 0 24px;
  border: none;
  border-radius: 24px;
  background-color: #FF7A30;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(255, 122, 48, 0.3);
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}

.md-submit-btn:hover {
  background-color: #465C88;
  box-shadow: 0 4px 10px rgba(70, 92, 136, 0.3);
}

/* Material Filter Chips & Sort Controls */
.md-controls-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid #eeeeee;
}

.md-chips-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.md-filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #dadce0;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.75);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.md-filter-chip:hover {
  background-color: #f5f5f5;
  border-color: #c6c6c6;
}

.md-filter-chip.md-chip-selected {
  background-color: rgba(255, 122, 48, 0.14);
  border-color: #FF7A30;
  color: #c84b00;
  font-weight: 600;
}

.md-chip-icon,
.md-chip-check {
  font-size: 16px;
  margin: 0;
  color: inherit;
}

.md-chip-count {
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.08);
  color: inherit;
}

.md-filter-chip.md-chip-selected .md-chip-count {
  background-color: #FF7A30;
  color: #ffffff;
}

.md-sort-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
}

.md-sort-icon {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
  margin: 0;
}

.md-sort-select {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #dadce0;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
}

.md-sort-select:focus {
  border-color: #FF7A30;
}

/* Material Indeterminate Progress Bar */
.md-loading-state {
  padding: 48px 0;
  text-align: center;
}

.md-progress-track {
  width: 280px;
  max-width: 80%;
  height: 4px;
  background-color: rgba(255, 122, 48, 0.2);
  border-radius: 2px;
  margin: 0 auto 16px;
  overflow: hidden;
  position: relative;
}

.md-progress-bar {
  width: 45%;
  height: 100%;
  background-color: #FF7A30;
  border-radius: 2px;
  position: absolute;
  animation: md-indeterminate 1.2s infinite ease-in-out;
}

@keyframes md-indeterminate {
  0% {
    left: -45%;
  }
  100% {
    left: 100%;
  }
}

.md-loading-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

/* Results Summary */
.md-results-summary {
  text-align: left;
  margin-bottom: 18px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
}

.md-query-highlight {
  color: #FF7A30;
  font-weight: 600;
}

/* Material Cards Grid */
.md-results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 36px;
}

.md-result-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.md-result-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.md-card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.md-card-media {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #f1f3f4;
  overflow: hidden;
}

.md-card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.md-result-card:hover .md-card-img {
  transform: scale(1.03);
}

.md-card-img-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.26);
}

.md-card-img-placeholder .material-icons {
  font-size: 48px;
}

.md-category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.md-badge-games {
  background-color: #FF7A30;
}

.md-badge-entertainment {
  background-color: #465C88;
}

.md-badge-tech {
  background-color: #00796b;
}

.md-badge-smlc {
  background-color: #5e35b1;
}

.md-card-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
}

.md-card-meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  min-height: 20px;
}

.md-card-date {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
}

.md-card-date .material-icons {
  font-size: 14px;
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
}

.md-card-stars {
  display: inline-flex;
  align-items: center;
}

.md-star-icon {
  font-size: 15px;
  color: #FF7A30;
  margin: 0;
}

.md-card-title {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.md-result-card:hover .md-card-title {
  color: #FF7A30;
}

.md-card-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.md-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #f1f3f4;
  margin-top: auto;
}

.md-tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 500;
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.md-tag-chip .material-icons {
  font-size: 13px;
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
}

.md-read-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FF7A30;
}

.md-read-more .material-icons {
  font-size: 16px;
  margin: 0;
  color: inherit;
  transition: transform 0.2s ease;
}

.md-result-card:hover .md-read-more .material-icons {
  transform: translateX(3px);
}

/* Pagination / Load More */
.md-pagination-wrap {
  display: flex;
  justify-content: center;
  margin: 16px 0 40px;
}

.md-load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 24px;
  border: none;
  background-color: #FF7A30;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.md-load-more-btn:hover {
  background-color: #465C88;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.md-load-more-btn .material-icons {
  font-size: 20px;
  margin: 0;
  color: inherit;
}

/* Empty State */
.md-empty-state {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  padding: 56px 24px;
  text-align: center;
  margin-bottom: 40px;
}

.md-empty-icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 122, 48, 0.1);
  color: #FF7A30;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.md-empty-icon-circle .material-icons {
  font-size: 36px;
  margin: 0;
  color: inherit;
}

.md-empty-title {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 8px;
  text-align: center;
}

.md-empty-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  max-width: 460px;
  margin: 0 auto 24px;
  line-height: 1.5;
}

.md-empty-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.md-outlined-btn {
  padding: 8px 18px;
  border-radius: 20px;
  border: 1px solid #FF7A30;
  background: transparent;
  color: #FF7A30;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.md-outlined-btn:hover {
  background-color: rgba(255, 122, 48, 0.08);
}

.md-text-btn {
  padding: 8px 18px;
  border-radius: 20px;
  background: #f1f3f4;
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.md-text-btn:hover {
  background: #e0e0e0;
}

@media (max-width: 650px) {
  .md-search-surface {
    padding: 20px 16px;
  }

  .md-main-search-box {
    padding: 4px 6px 4px 12px;
  }

  .md-submit-btn {
    padding: 0 16px;
    font-size: 12px;
  }

  .md-results-grid {
    grid-template-columns: 1fr;
  }
}
</style>

