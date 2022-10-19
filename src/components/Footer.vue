<template>
         <footer class="Site-content" id="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2022 NeptuneStudio | All rights reserved.</p>
        
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name:"Footer"
}
</script>
<style>
footer{
  padding: 8px 0;
  background-color: #000;
  color: #fff;
  text-align: center;
}
.Site-content {
  flex: 1;
}

.footer-content p{
  line-height: 22px;
}

.footer-social-icon a i{
  color: #fff;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
  margin-right: 15px;
}


</style>