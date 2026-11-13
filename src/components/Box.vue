<template>
  <div id="box">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
#box {
  padding: 35px;
}
</style>