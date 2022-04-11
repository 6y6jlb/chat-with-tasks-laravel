<template>
  <nav class="d-flex justify-content-between m-4 mt-1 fs-3 fw-bolder" >
      <a href="/portfolio">me</a>
     <div class="d-flex gap-5">
   <a class=""><router-link :to="{name: 'home'}"> Home </router-link></a>
          <a><router-link :to="{name: 'about'}"> About</router-link> </a>
     </div>
       
    
  </nav>
</template>

<script>
export default {
    name: 'nav-bar'
}
</script>

<style>

</style>