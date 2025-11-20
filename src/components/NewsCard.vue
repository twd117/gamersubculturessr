 

 
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
.news-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
}
.news-card:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
.news-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.news-content {
  padding: 12px 16px;
}
.news-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}
.news-subtitle {
  font-size: 0.875rem;
  color: #555;
  margin-top: 4px;
}
</style>
