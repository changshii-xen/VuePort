<template>
  <div class="navigation" >
     <v-row :scroll-y="scrollY" src="//unpkg.com/vue@latest/dist/vue.js"
      justify="center"
      no-gutters
    >
      
      <a href="#welcome">
        <v-btn
        color="#3b3b3b"
        text
        rounded
        large
        class="my-2"
      >
        Home
      </v-btn>
        </a>
      <a href="#about">
        <v-btn
        color="#3b3b3b"
        text
        rounded
        large
        class="my-2"
      >
        About me
        </v-btn>
        </a>
      
      <a href="#skills">
        <v-btn
        color="#3b3b3b"
        text
        rounded
        large
        class="my-2"
      >
        Skills
        </v-btn>
        </a>
        
      
      
      <a href="#other">
        <v-btn
        color="#3b3b3b"
        text
        rounded
        large
        class="my-2"
      >
        Testimonials
        </v-btn>
        </a>
      
    </v-row>
    
    
    
  </div>
</template>
<script>
export default {
    data: () => ({
      links: [
        'Home',
        'About Me',
        'Skills',
        'Testimonials',
      ],
    }),
  }
</script>
<style scoped>
.white--text {
  height: 10px;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
.navigation {
  position:fixed;
  top:0;
  width:100%;
  height: 65px;     
  background: #e6e6e6;
  /* border-bottom: 1px rgb(175, 175, 175) solid; */
  /* box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25); */
  display: flex;
  z-index: 1;
}
.img {
  width: 75px;
  height: 75px;
  margin-left: 48px;
  margin-top: 12px;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.heading {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  margin-left: 15px;
  margin-top: 10px;
}
@media (max-width: 480px) {
  .img {
    width: 50px;
    height: 50px;
    margin-left: 18px;
    margin-top: 6px;
  }
  .heading {
    font-size: 20px;
  }
}
</style>
