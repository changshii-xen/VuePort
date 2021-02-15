<template>
  <v-parallax
    
    src='../assets/test3.jpg'
  >
  <br><br>
   
   <div class="container">
     <div class="item1">
      <img
        src='../assets/me4.png'
        alt="John"
        class="image"
      >
     </div>
    <div class="item2">
    <vue-typed-js :strings="['There, I am Siyamthanda Mgoqi. I am a hard working, passionate and enthusiastic individual who would like to be working on the next big piece of software,farthermore I put my all in into the work I do and I aspire to be a great Developer.']">
    <h2>Hello <span class="typing"></span></h2>
    </vue-typed-js>
    </div>
  </div> 
  </v-parallax>
</template> 
<script>
export default {
  data() { 
    return {
      
    };
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#intro {
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
}
.container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item1{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 5%;
}
.item2{
 position: absolute;
 left: 40%;
}
.image{
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  object-fit: fill;
}

h2{
  font-size: 26px;
  // font-weight: normal;
  color: white;
  -webkit-text-stroke: 1px #000000;
}


#desc {
  margin-top: 3%;
  font-weight: normal;
  font-size: 20px;
  display: block;
  font-family: "Poppins";
  line-height: initial;
}
img {
  object-fit: cover;
}
.line {
  display: inline;
  margin: 0% 3%;
}

.content {
  width: 50%;
  margin-top: 5%;
  margin-left: 3%;
}
.buttons {
  width: 100%;
  margin-top: 4%;
}
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* margin-top: 3%; */
  position: relative;
}
.card-imgs {
  object-fit: cover;
}
.cards {
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 25px;
  width: 84%;
}
.doc {
  width: 350px;
  height: 300px;
}
</style>
