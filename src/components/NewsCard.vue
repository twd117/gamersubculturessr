 

 
<script>
export default {
  name: 'NewsCard',
  props:{  cslug: String,
  id: String,
  image: String,
  title: String,
  subtitle: String} 
  }

</script>

<template>

<router-link
    :to="{ name: cslug, params: { id: id, title:  title  } }"
  > 
  <article class="news-card">
    <img :src="image" alt="news image" class="news-img" />
    <div class="news-content">
      <h3 class="news-title">{{ title }}</h3>
      <p v-if="subtitle" class="news-subtitle">{{ subtitle }}</p>
    </div>
  </article></router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: flex;
}

.news-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.news-img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  background-color: #f1f3f4;
  transition: transform 0.3s ease;
}

.news-card:hover .news-img {
  transform: scale(1.03);
}

.news-content {
  padding: 18px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-title {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 8px;
  transition: color 0.2s ease;
}

.news-card:hover .news-title {
  color: #FF7A30;
}

.news-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
