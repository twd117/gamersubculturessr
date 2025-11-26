<template>
  <div class="deals-container">
    <div class="deal-item" v-for="deal in deals" :key="deal.id">
      <div class="deal-image">
        <img :src="deal.imageUrl" :alt="deal.title">
      </div>
      <div class="deal-info">
        <h3 class="deal-title">{{ deal.title }}</h3>
        <div class="deal-prices">
          <a v-for="price in deal.prices" :key="price.vendor" :href="price.link" target="_blank" :class="['price-btn', price.vendor.toLowerCase()]">
            <img :src="getVendorLogo(price.vendor)" :alt="price.vendor" class="vendor-logo">
            <span class="price">{{ price.price }}</span>
            <span class="original-price" v-if="price.originalPrice">{{ price.originalPrice }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsComponent',
  data() {
    return {
      deals: [
        {
          id: 1,
          title: 'Xbox Elite Series 2 Wireless Controller',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71v-R2qC4hL._AC_SL1500_.jpg', // Placeholder
          prices: [
            { vendor: 'Amazon', price: '$139.99', originalPrice: '$199.99', link: '#' },
            { vendor: 'GameStop', price: '$153.95', originalPrice: '$179.99', link: '#' },
            { vendor: 'Walmart', price: '$169.99', link: '#' },
            { vendor: 'BestBuy', price: '$179.99', link: '#' }
          ]
        },
        {
          id: 2,
          title: 'PS5 DualSense Controller - White',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61o7kC-6wSL._AC_SL1500_.jpg', // Placeholder
          prices: [
            { vendor: 'Amazon', price: '$54.99', originalPrice: '$74.99', link: '#' },
            { vendor: 'Walmart', price: '$68.99', link: '#' },
            { vendor: 'BestBuy', price: '$74.99', link: '#' }
          ]
        },
        {
          id: 3,
          title: 'Gotham Knights - Deluxe Edition (Xbox Series X|S)',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81zN7n-4PZL._AC_SL1500_.jpg', // Placeholder
          prices: [
            { vendor: 'Amazon', price: '$19.99', link: '#' }
          ]
        },
        {
          id: 4,
          title: 'Xbox Series X Digital',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51B4j3-Q3jL._AC_SL1000_.jpg', // Placeholder
          prices: [
            { vendor: 'Walmart', price: '$448', link: '#' },
            { vendor: 'BestBuy', price: '$449.99', link: '#' },
            { vendor: 'Amazon', price: '$596', link: '#' }
          ]
        },
        {
          id: 5,
          title: 'FIFA 23 - Standard Edition (Xbox One)',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81b-3f9-GeL._AC_SL1500_.jpg', // Placeholder
          prices: []
        },
        {
          id: 6,
          title: 'PlayStation VR2',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61e4b3m-3KL._AC_SL1500_.jpg', // Placeholder
          prices: [
            { vendor: 'BestBuy', price: '$549.99', link: '#' }
          ]
        }
      ]
    };
  },
  methods: {
    getVendorLogo(vendor) {
      if (vendor.toLowerCase() === 'amazon') {
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg';
      }
      if (vendor.toLowerCase() === 'gamestop') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/GameStop_Logo.svg/1200px-GameStop_Logo.svg.png';
      }
      if (vendor.toLowerCase() === 'walmart') {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1200px-Walmart_Spark.svg.png';
      }
      if (vendor.toLowerCase() === 'bestbuy') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png';
      }
      return ''; // fallback
    }
  }
};
</script>

<style scoped>
.deals-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
}

.deal-item {
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.deal-image {
  flex-shrink: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deal-image img {
  max-width: 100px;
  height: auto;
}

.deal-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.deal-title {
  font-family: 'Google Sans', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 15px;
}

.deal-prices {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.price-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: white;
  font-size: 0.9rem;
}

.vendor-logo {
  height: 16px;
  margin-right: 8px;
  filter: brightness(0) invert(1); /* Make logos white */
}

.price {
  margin-right: 5px;
}

.original-price {
  text-decoration: line-through;
  color: #e0e0e0;
  font-size: 0.8rem;
}

/* Vendor specific styles */
.price-btn.amazon {
  background-color: #000000;
}
.price-btn.gamestop {
  background-color: #707070;
}
.price-btn.gamestop .vendor-logo {
    filter: none;
}


.price-btn.walmart {
  background-color: #0071ce;
}

.price-btn.bestbuy {
  background-color: #0a4ab3;
}
</style>
