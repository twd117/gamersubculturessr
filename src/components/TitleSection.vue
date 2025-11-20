<template>
  <div id="titlebox"><h1 class="ht">{{text}}</h1></div>
</template>
<script>
export default {
  name: "TitleSection",
  props: ["text"]
};
</script>

<style>
#titlebox {
  display: flex;
}
.ht {
  color: #212529;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 0.0175rem;
  line-height: 2.75rem;
  text-align: left;
  text-shadow: none;
}
</style>