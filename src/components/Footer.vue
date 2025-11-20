<template>
         <footer class="Site-content" id="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2024 NeptuneStudio | All rights reserved.</p>
        
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
  padding: 20px 0;
  background-color: #f8f9fa;
  color: #212529;
  text-align: center;
  border-top: 1px solid #dee2e6;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}
.Site-content {
  flex: 1;
}

.footer-content p{
  line-height: 22px;
  font-family: 'Roboto', sans-serif;
}

.footer-social-icon a i{
  color: #212529;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
  margin-right: 15px;
  transition: color 0.3s ease;
}

.footer-social-icon a i:hover{
  color: #007bff;
  text-shadow: none;
}


</style>