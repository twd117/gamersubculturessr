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
  color: #424242;
  font-family: Google Sans;
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 0.0175rem;
  line-height: 2.75rem;
  text-align: left;
}
</style>