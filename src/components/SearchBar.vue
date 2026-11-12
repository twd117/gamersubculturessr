<template>
  <div class="md-search-wrapper" ref="searchWrapper">
    <form class="md-search-bar" :class="{ 'md-focused': isFocused }" @submit.prevent="submitSearch">
      <button
        type="submit"
        class="md-icon-btn md-search-leading"
        aria-label="Search"
        title="Search"
      >
        <i class="material-icons">search</i>
      </button>

      <input
        ref="searchInput"
        v-model="localQuery"
        type="text"
        class="md-search-input"
        placeholder="Search games, tech, news..."
        aria-label="Search articles"
        @focus="onFocus"
        @input="onInput"
        @keydown.esc="closeDropdown"
      />

      <button
        v-if="localQuery.length > 0"
        type="button"
        class="md-icon-btn md-search-trailing"
        aria-label="Clear search"
        title="Clear"
        @click="clearSearch"
      >
        <i class="material-icons">close</i>
      </button>
    </form>

    <!-- Material Design Elevated Suggestions Menu -->
    <transition name="md-fade">
      <div
        v-if="showDropdown && localQuery.trim().length >= 2"
        class="md-search-dropdown"
        role="listbox"
      >
        <div v-if="searchStore.isLoading" class="md-dropdown-status">
          <div class="md-spinner-sm"></div>
          <span>Searching articles...</span>
        </div>

        <template v-else-if="previewResults.length > 0">
          <router-link
            v-for="item in previewResults"
            :key="item.category + '-' + item.id"
            :to="{ name: item.routeName, params: { id: item.id, title: item.title } }"
            class="md-suggestion-item"
            @click="closeDropdown"
          >
            <img
              v-if="item.imgurl"
              :src="item.imgurl"
              :alt="item.title"
              class="md-suggestion-thumb"
            />
            <div class="md-suggestion-content">
              <span class="md-suggestion-title">{{ item.title }}</span>
              <div class="md-suggestion-meta">
                <span class="md-chip-mini" :class="'md-cat-' + item.category">
                  {{ item.categoryLabel }}
                </span>
                <span v-if="item.tag" class="md-suggestion-tag">#{{ item.tag }}</span>
              </div>
            </div>
            <i class="material-icons md-suggestion-arrow">north_east</i>
          </router-link>

          <button type="button" class="md-view-all-btn" @click="submitSearch">
            <i class="material-icons">manage_search</i>
            <span>View all results for "{{ localQuery.trim() }}"</span>
          </button>
        </template>

        <div v-else class="md-dropdown-empty">
          <i class="material-icons">search_off</i>
          <span>No instant matches. Press Enter for full search.</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useSearchStore } from '../store/useSearchStore.js';

export default {
  name: 'SearchBar',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const searchStore = useSearchStore();

    const localQuery = ref(route.query.q ? String(route.query.q) : '');
    const isFocused = ref(false);
    const showDropdown = ref(false);
    const searchWrapper = ref(null);
    const searchInput = ref(null);

    watch(
      () => route.query.q,
      (newQ) => {
        if (newQ !== undefined) {
          localQuery.value = String(newQ);
        }
      }
    );

    const previewResults = computed(() => {
      if (!localQuery.value || localQuery.value.trim().length < 2) return [];
      return searchStore.getResults(localQuery.value, 'all', 'relevance').slice(0, 5);
    });

    const onFocus = () => {
      isFocused.value = true;
      showDropdown.value = true;
      searchStore.ensureLoaded();
    };

    const onInput = () => {
      showDropdown.value = true;
      searchStore.ensureLoaded();
    };

    const clearSearch = () => {
      localQuery.value = '';
      showDropdown.value = false;
      if (searchInput.value) {
        searchInput.value.focus();
      }
    };

    const closeDropdown = () => {
      showDropdown.value = false;
      isFocused.value = false;
    };

    const submitSearch = () => {
      const trimmed = localQuery.value.trim();
      if (!trimmed) return;
      showDropdown.value = false;
      searchStore.searchQuery = trimmed;
      router.push({ name: 'Search', query: { q: trimmed } });
    };

    const handleClickOutside = (event) => {
      if (searchWrapper.value && !searchWrapper.value.contains(event.target)) {
        showDropdown.value = false;
        isFocused.value = false;
      }
    };

    onMounted(() => {
      if (typeof document !== 'undefined') {
        document.addEventListener('mousedown', handleClickOutside);
      }
    });

    onBeforeUnmount(() => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    });

    return {
      localQuery,
      isFocused,
      showDropdown,
      searchWrapper,
      searchInput,
      searchStore,
      previewResults,
      onFocus,
      onInput,
      clearSearch,
      closeDropdown,
      submitSearch,
    };
  },
};
</script>

<style scoped>
.md-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 18px;
  z-index: 100;
}

.md-search-bar {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 28px;
  padding: 2px 8px;
  height: 42px;
  min-width: 240px;
  max-width: 320px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.md-search-bar:hover {
  background-color: #eceff1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.md-search-bar.md-focused {
  background-color: #ffffff;
  border-color: #FF7A30;
  box-shadow: 0 2px 6px rgba(255, 122, 48, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12);
}

.md-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  padding: 0 6px;
  width: 100%;
}

.md-search-input::placeholder {
  color: rgba(0, 0, 0, 0.54);
  font-weight: 400;
}

.md-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  transition: background-color 0.15s ease, color 0.15s ease;
  padding: 0;
}

.md-icon-btn:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: #FF7A30;
}

.md-icon-btn .material-icons {
  font-size: 20px;
  margin: 0;
  color: inherit;
}

/* Material Elevated Dropdown Surface */
.md-search-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 360px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
  overflow: hidden;
  text-align: left;
}

.md-suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.15s ease;
}

.md-suggestion-item:hover {
  background-color: rgba(255, 122, 48, 0.06);
}

.md-suggestion-thumb {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  background: #f5f5f5;
}

.md-suggestion-content {
  flex: 1;
  min-width: 0;
}

.md-suggestion-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.35;
}

.md-suggestion-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.md-chip-mini {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 2px 6px;
  border-radius: 4px;
  background: #eceff1;
  color: #37474f;
}

.md-cat-games {
  background: rgba(255, 122, 48, 0.14);
  color: #d85a12;
}

.md-cat-entertainment {
  background: rgba(70, 92, 136, 0.14);
  color: #465C88;
}

.md-cat-tech {
  background: rgba(0, 150, 136, 0.14);
  color: #00796b;
}

.md-cat-smlc {
  background: rgba(103, 58, 183, 0.14);
  color: #5e35b1;
}

.md-suggestion-tag {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.md-suggestion-arrow {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.38);
}

.md-view-all-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: #fafafa;
  color: #FF7A30;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.md-view-all-btn:hover {
  background: rgba(255, 122, 48, 0.1);
}

.md-view-all-btn .material-icons {
  font-size: 18px;
  color: #FF7A30;
  margin: 0;
}

.md-dropdown-status,
.md-dropdown-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
}

.md-spinner-sm {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 122, 48, 0.25);
  border-top-color: #FF7A30;
  border-radius: 50%;
  animation: md-spin 0.7s linear infinite;
}

@keyframes md-spin {
  to {
    transform: rotate(360deg);
  }
}

.md-fade-enter-active,
.md-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.md-fade-enter-from,
.md-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 600px) {
  .md-search-wrapper {
    margin-top: 8px;
    width: 100%;
    justify-content: center;
  }

  .md-search-bar {
    width: 90%;
    max-width: 100%;
  }

  .md-search-dropdown {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: 92vw;
  }
}
</style>

