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
  align-items: center;
  margin-top: 8px;
  margin-bottom: 12px;
}
.ht {
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  text-align: left;
  text-shadow: none;
  position: relative;
  padding-left: 14px;
}
.ht::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 4px;
  border-radius: 2px;
  background-color: #FF7A30;
}
</style>