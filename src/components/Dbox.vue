<template>
  <div class="site">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}


 
</style>