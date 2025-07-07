<template>
 <div>
    <Container class="backCon" />
    <Container1 class="backCon1">
    <img :src="mine" alt="Man" class="profile-img" />
    </Container1>
    <div class="sec">
       <h2 class="heading">It's me Muhammad Inam Ullah</h2>
       <p>
       I'm a web designer and front-end developer based in Islamabad, Pakistan. I focus on creating clean, responsive, and user-friendly websites that not only look great but also offer a smooth experience. I'm passionate about building software and digital solutions that solve real problems and make everyday tasks easier for people. I enjoy turning ideas into functional and visually appealing designs that help users and businesses succeed online.
      </p>
      <Button class="btn" label="More About Me" @click="handleClick"/>
    </div>
  </div>
</template>


<script setup>
import Container from './components/container.vue'
import Container1 from './components/container.vue'
import mine from './assets/mine.png'
import Button from './components/button.vue'
import { useRouter } from 'vue-router' // 👈 import this
 

const router = useRouter() 

function handleClick() {
  router.push('/about') 
}
</script>


<style>
.backCon {
  position: relative;
  margin-top: 80px;
  margin-left: -739px;
  width: 400px;
  height: 770px;
  background: linear-gradient(to right, rgb(210, 179, 57), #111111);
  color: white;
  display: flex;
 }
 .backCon1 {
  position: absolute;
  top:150px;
  margin-top: 120px;
  margin-left: -500px;
  width: 400px;
  height: 500px;
  background-color:white;
  color: white;
  display: flex;
 }
.profile-img {
  width: 400px;
  height: auto;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Adds a soft shadow */
}
.sec{
  position: absolute;
  margin-left: 0;
  top: 320px;
  width:40%;
  height: 300px;
}
.heading{
  font-size: 40px;
  text-decoration: underline;
  color: rgb(210, 179, 57);
}
.btn {
  color: #111111;
  padding: 15px 28px;
  background-color: rgb(210, 179, 57);
  border: none;
  font-size: 16px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* ← this adds shadow */
  transition: all 0.3s ease;
}

.btn:hover {
  color:#111111;
  background-color:white;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25); /* more shadow on hover */
  cursor: pointer;
  
}


</style>