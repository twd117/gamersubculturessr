<script setup>
import NewsCard from './NewsCard.vue';
 
 
 
defineProps({
  items: Array,
  nslug: String,
})
</script>

<template>
  <section class="news-list">

    
    <NewsCard
      v-for="(item, index) in items"
      :key="index"
      :image="item.img[0].downloadURL"
      :title="item.title"
      :subtitle="item.sub"
      :id="item.id"
      :cslug="nslug"


    />

   </section>
</template>

<style scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin:95px;


}
.news-list > * {
  flex: 1 1 calc(33.333% - 16px);
  min-width: 280px;
}
@media (max-width: 768px) {
  .news-list {
   
  margin:35px;


}
}
</style>
