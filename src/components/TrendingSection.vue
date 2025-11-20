<script    >
export default {
  props: ['items'],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props.items  )
  }
}


</script>

<template>
  <section class="trending">
    <h2 class="heading">Trending Now</h2>
    <div class="trending-container">
      <div class="main-item" v-if="items && items.length">
        <img :src="items[0].img[0].downloadURL" alt="" />
        <h3>{{ items[0].title }}</h3>
      </div>
      <ul class="side-list" v-if="items.length > 1">
        <li v-for="(item, i) in items.slice(1)" :key="i">
          <span class="index">{{ i + 2 }}</span>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.trending {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 16px;
}
.trending-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.main-item {
  flex: 2;
}
.main-item img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}
.main-item h3 {
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 600;
}
.side-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
li {
  display: flex;
  align-items: center;
}
.index {
  color: #fff;
  background: #1976d2;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
}
p {
  font-size: 0.9rem;
  margin: 0;
}
</style>
 

