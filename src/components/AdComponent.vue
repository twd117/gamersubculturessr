<template>
  <div v-if="ads" class="ads-container">
    <div class="ad-card">
      <div class="ad-card-main">
        <div class="ad-image-container">
          <img :src="ads.image" :alt="ads.name" />
        </div>
        <div class="ad-info">
          <h3 class="ad-name">{{ ads.name }}</h3>


        <div class="ad-price-details">
        <div class="price-info">
          <span class="original-price">{{ ads.originalPrice }}</span>
          <span class="save-info">save {{ ads.savePercent }}%</span>
        </div>
        <p class="discounted-price">{{ ads.discountedPrice }} at {{ ads.store }}</p>
      </div>
        </div>
 
      </div>
     

      <a :href="ads.link" > 
      <button v-if="ads.code && ads.code !== ''" :href="ads.link" class="coupon-button" >Use code '{{ ads.code }}'</button>

      <button v-else :href="ads.link" class="coupon-button" >See On {{ ads.store }} </button>
    </a> 
    </div>
  </div>
</template>

<script>
export default {
  name: "AdComponent",
  props: {
    ads: {
      type: Object,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');

.ads-container {
  width: 100%;
}

.ad-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  color: #000000;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
}

.ad-card-main {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.ad-image-container {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 8px;
}

.ad-image-container img {
  width: 150px;
  height: auto;
}

.ad-info {
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: space-between;


}

.ad-name {

  margin-top:16px;
  margin-bottom:16px;
   
  font-size: 1.25rem;
  font-family: 'Google Sans', sans-serif;
}

.ad-price-details {
  background-color: #f5f5f5;
  color: black;
  border-radius: 8px;
  padding: 12px;
 }

.price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.original-price {
  text-decoration: line-through;
  color: #718096;
}

.save-info {
  font-weight: 500;
}

.discounted-price {
  margin: 8px 0 0;
  font-weight: bold;
  font-size: 1.125rem;

  font-family: 'Roboto', sans-serif;
}

.coupon-button {

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background-color: #212121; /* Dark color */
  border: none;
  border-radius: 4px;
  color: white;
  padding: 12px;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.coupon-button:hover {
  background-color: #000000; /* Darker on hover */
}
</style>
