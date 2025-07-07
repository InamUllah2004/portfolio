<template>
    <div class="About-page">
        <h1 class="Heading">About Me</h1>

        <div class="info-box" >
            <div class="personal-info">
                <div>
                    <strong>First Name:</strong> Inam &nbsp;&nbsp;&nbsp;
                    <strong>Last Name:</strong> Ullah &nbsp;&nbsp;&nbsp;
                    <strong>Age:</strong> 20 Years &nbsp;&nbsp;&nbsp;
                    <strong>Nationality:</strong> Pakistani
                </div>
                <div>
                    <strong>Freelance:</strong> Available &nbsp;&nbsp;&nbsp;
                    <strong>Address:</strong> DHA 1, Islamabad, Pakistan &nbsp;&nbsp;&nbsp;
                    <strong>Phone:</strong> 03175700805
                </div>
                <div>
                    <strong>Email:</strong>
                    <a href="mailto:inamu0448@gmail.com">inamu0448@gmail.com</a> &nbsp;&nbsp;&nbsp;
                    <strong>Languages:</strong> English, Urdu
                </div>
            </div>
        </div>
        <!---Skills portion -->
        <div class="Skills">
            <h1 class="Heading1">Skills</h1>
            <div class="image-gallery">

                <div class="gallery-grid">
                    <img v-for="(image, index) in images" :key="index" :src="image" :alt="image" />
                </div>
            </div>

        </div>

        <!--Education Background-->
    <div class="timeline-section">
        <h2 class="timeline-heading">My Journey</h2>
      <div class="timeline">
      <div class="timeline-item" v-for="(event, index) in timelineData" :key="index">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>{{ event.title }}</h3>
        <span>{{ event.date }}</span>
        <p>{{ event.description }}</p>
       </div>
      </div>
     </div>
    </div>


    </div>
</template>

<script setup>

const images = [
    './src/assets/html.png',
    './src/assets/css.png',
    './src/assets/js.png',
    './src/assets/vue.png',
    './src/assets/node.png',
    './src/assets/cpp.png',
    './src/assets/C.png',
    './src/assets/csharp.png',
    './src/assets/asm.png',
    './src/assets/square.png',
    './src/assets/python.png',
    './src/assets/wordPress.png'
];
const timelineData = [
  {
    title: "Matric",
    date: "2019",
    description: "Biology",
  },
  {
    title: "Fsc",
    date: "2021",
    description: "Pre-engineering",
  },
  {
    title: "Software Engineering",
    date: "2023",
    description: "Started Software Engineering from Fast Islamabad.",
  },
  {
    title: "Internship",
    date: "2025",
    description: "Started Internship in TereSol",
  }  
];

</script>

<style>

.Heading {
    color: rgb(210, 179, 57);
    font-size: 45px;
    margin-top:100px;
    /* margin-top: -320px; */
    text-decoration: underline;
}

.Heading1 {
    color: rgb(210, 179, 57);
    font-size: 45px;
    margin-top: 60px;
    text-decoration: underline;
}

.info-box {
    background-color: rgb(210, 179, 57);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

    width: 100%;
    max-width: 850px;
    /* or whatever size looks good */

    margin: auto;
}

.personal-info {
    font-size: 16px;
    line-height: 2;
    color: white;
}

.personal-info strong {
    color: black;
    text-decoration: underline;
}

.personal-info a {
    color: white;
    text-decoration: none;
}

.image-gallery {
    margin: 80px auto; 
    padding: 30px;
    background-color: rgb(210, 179, 57);
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    max-width: 800px; 
}

.gallery-heading {
    top:400px;
    text-align: center;
    font-size: 26px;
    color: #111111;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
    gap: 30px;
    justify-items: center;
}

.gallery-grid img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: contain; 
    background-color: white; 
    padding: 6px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.gallery-grid img:hover {
    transform: scale(1.1);
}

.timeline-section {
  padding: 10px 30px;
  background-color: #111111;
  border-radius: 12px;
  max-width: 800px;
  margin: 80px auto;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.timeline-heading {
  color: rgb(210, 179, 57);
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
  text-decoration: underline;
}

.timeline {
  position: relative;
  margin-left: 20px;
  border-left: 4px solid rgb(210, 179, 57);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 20px;
  transition: transform 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(8px); /* subtle slide on hover */
}

.timeline-content {
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  color: #111;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transform: scale(1.02);
}


.timeline-dot {
  position: absolute;
  left: -11px;
  top: 0;
  width: 18px;
  height: 18px;
  background-color: rgb(210, 179, 57);
  border-radius: 50%;
  border: 3px solid #111111;
}

.timeline-content {
  background-color:rgb(210, 179, 57) ;
  padding: 16px;
  border-radius: 8px;
  color: #111;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.timeline-content h3 {
  margin: 0;
  font-size: 20px;
  color: black;
  text-decoration: underline;
}

.timeline-content span {
  display: block;
  font-size: 14px;
  color: black;
  margin-bottom: 8px;
}

</style>
