<template>
  <div class="contact-container">
    <!-- Left: Contact Form -->
    <div class="contactMe">
      <form @submit.prevent="handleSubmit">
        <h2 class="Heading">Contact Me</h2>
        <input type="text" v-model="name" placeholder="Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="text" v-model="message" placeholder="Message" required />
        <button type="submit">Contact Me</button>
      </form>
    </div>

    <!-- Right: Image Gallery -->
    <div class="image-gallery1">
      <div class="gallery-grid1">
        <img src="@/assets/instagram.png" alt="Instagram" @click="handleInstagramClick" />
        <img src="@/assets/link.png" alt="LinkedIn" @click="handleLinkedInClick" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const name = ref('')
const email = ref('')
const message = ref('')

// Your EmailJS configuration
const serviceID = 'service_0in1i6f'
const templateID = 'template_tp9lkvs'
const publicKey = '2YfISc9edKCdx7q6z'

function handleSubmit() {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value
  }

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert('Message sent to Inam Ullah')
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((error) => {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again.')
    })
}

function handleInstagramClick() {
  window.open('https://www.instagram.com/inam_.04/', '_blank')
}

function handleLinkedInClick() {
  window.open('https://www.linkedin.com/in/inam-ullah-5551a8311/', '_blank')
}
</script>


<style>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  margin-top: 50px;
  margin-left:-50px;
}

.Heading {
  color: black;
}

.contactMe {
  background-color: rgb(210, 179, 57);
  width: 350px;
  border-radius: 50px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input[type="text"],
form input[type="email"],
form input[type="message"],
form textarea {
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  color: black;
  background-color: white;
}

.image-gallery1 {
  background-color:rgb(210, 179, 57);
  border-radius: 12px;
  padding: 30px 20px;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  height:280px;
}

.gallery-grid1 {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.gallery-grid1 img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-grid1 img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}
</style>