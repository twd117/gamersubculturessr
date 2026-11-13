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
a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
}

.shrink-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  min-width: 160px;
  margin: 8px 0;
  font-family: 'Roboto', sans-serif;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.shrink-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
  background-color: #f1f3f4;
  transition: transform 0.3s ease;
}

.shrink-card:hover .card-image {
  transform: scale(1.03);
}

.card-content {
  padding: 16px 18px;
  text-align: left;
}

.card-title {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  transition: color 0.2s ease;
}

.shrink-card:hover .card-title {
  color: #FF7A30;
}

@media (max-width: 768px) {
  .card-title {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .card-title {
    font-size: 14px;
  }
}
</style>
