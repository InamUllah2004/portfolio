<template>
  <Header class="header" />
 <div>
   <RouterView/>
  </div>
  
</template>
 
<script setup>
import Header from './components/header.vue'
</script>

<style>
body{
 background-color: #111111;
  margin: 0;
  padding: 0;
}
.header {
  background-color: #111111;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  height: 80px;
  width: 100%;
  display: flex;
  padding-left: 20px;
  text-align: center;
}
</style>
