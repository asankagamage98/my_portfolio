<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>

  </div>

</template>

<script>
 import Navbar from './components/Navebar.vue'
  

 export default {
   components:{
    'navbar' :Navbar,
   }
 }
</script>

<style>
 
</style>
