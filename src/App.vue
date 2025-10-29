<template>
  <suspense>

  <router-view />
  </suspense>
</template>

<script>
//const client = redis.createClient({
// url: "redis-10266.c281.us-east-1-2.ec2.cloud.redislabs.com:10266"
//});

export default {
  name: "App",
  components: {},
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Orbitron', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00ff00;
  margin-top: 6px;
  background-color: #1a1a1a;
  
}


</style>
