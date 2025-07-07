<template>
  <nav class="Navigation">
    <div class="container">
      <ul class="nav-links">
        <li>
          <router-link to="/">
          <img :src="homeIcon" alt="Home" class="icon" @click="handleClick1" />
          <span class="icon-label">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
          <img :src="manIcon" alt="Man" class="icon" @click="handleClick2" />
          <span class="icon-label">About</span>
          </router-link>
        </li>
        <li>
          <img :src="ContactIcon" alt="Contact" class="icon" @click="handleClick3" />
          <span class="icon-label">Contact</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
 import homeIcon from '../assets/home.png'
 import manIcon from '../assets/man.png' 
 import ContactIcon from '../assets/contact.png' 

export default {
  name: 'Header',
  data() {
    return {
      homeIcon,
      manIcon,
      ContactIcon
    }
  },
    methods: {
        handleClick1() {
        this.$router.push('/') 
        },
        handleClick2() {
        this.$router.push('/about') 
        },
        handleClick3() {
         this.$router.push('/Contact')
        }
    }
}
</script>

<style>
.Navigation {
  background: linear-gradient(to right, #111111 0%, #111111 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 70px;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav-links a:hover {
  color: #ddd;
}
.icon {
  width: 50px;
  height: 50px;
  padding: 12px; /* shrinks image inside */
  box-sizing: border-box; /* ensures total size stays 50x50 */
  background-color:rgb(210, 179, 57);
  border-radius: 50%;
  object-fit: contain;
}

.icon:hover {
  background-color:white;
}


.icon-label {
  display: block;
  text-align: center;
  color: white;
  font-size: 11px;
  margin-top: 0px;
}


</style>
