<template>

<router-link
    :to="{ name: sslug , params: { id: id, title:  title  } }"
  > 
  <div class="shrink-card">
    <img 
      :src="imageUrl" 
 alt="Card Image" class="card-image" />
    <div class="card-content">
      <h3 class="card-title"> 
        {{ title }}
      
      </h3>
    </div>
  </div> 
  
  </router-link>
</template>

<script>
export default {
  name: 'ShrinkCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    sslug: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.shrink-card {
  background-color: #fff;
   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   width: 100%;
  max-width: 320px; /* Default max-width */
  min-width: 160px;
  margin: 4px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #dee2e6;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-content {
  padding: 1rem;
}

.card-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  transition: font-size 0.2s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .card-title {
    font-size: 1rem;
  }
}

/* At the smallest size, the font is smallest */
@media (max-width: 320px) {
  .card-title {
    font-size: 0.9rem;
  }
}
</style>
