<template  >
 <AdComponent v-if="  deals.length === 1" :ads="deals[0]" />

  <div v-if=" deals.length > 1" class="deals-container">
    <div class="deal-card" v-for="deal in deals" :key="deal.id">
      <img :src="deal.image" :alt="deal.name" />
      <h3>{{ deal.name }}</h3>
      <div class="price-info">
        <span class="original-price">{{ deal.originalPrice }}</span>
        <span class="save-info">save {{ deal.savePercent }}%</span>
      </div>
      <p class="discounted-price">{{ deal.discountedPrice }} at {{ deal.store }}</p>
      <a :href="deal.link">
        <button class="coupon-button" v-if="deal.code && deal.code !== ''">Use code '{{ deal.code }}'</button>
        <button  class="coupon-button" v-else>Use Link</button>
      </a>


    </div>
  </div>
</template>

<script>
import AdComponent from './AdComponent.vue';
 export default {
  name: "PowerStationDeals",
  props: {
    deals: {
      type: Array,
       default: () => [],
    },
  }, 
   
  components: {
    AdComponent,  
  }
};
</script>

<style scoped>
.deals-container {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.deals-container::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.deal-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 16px;
  width: 280px;
  flex-shrink: 0;
  text-align: left;
  border: 1px solid #E0E0E0;
  transition: box-shadow 0.3s ease-in-out;
}

.deal-card:hover {
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.deal-card img {
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.deal-card h3 {
  color: #212121;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 12px;
  line-height: 1.4;
  height: 4.2em;  
  overflow: hidden;
}

.price-info {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.original-price {
  text-decoration: line-through;
  color: #757575;
  font-size: 0.875rem;
}

.save-info {
    background-color: #E9E3DF;
    color: #465C88;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 4px;
}


.discounted-price {
  color: #212121;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 4px;
}

.coupon-button {
  background-color: #FF7A30;
  border: 1px solid #E0E0E0;
  color: #000;
  padding: 10px 16px;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  transition: background-color 0.2s;
}

.coupon-button:hover {
    background-color: #E9E3DF;
}
</style>
