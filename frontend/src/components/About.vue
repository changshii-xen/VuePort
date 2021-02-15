<template>
<div>
  <v-parallax
    
    src='../assets/9.jpg'
  >
  <v-row
   align="center"
    justify="space-around"
  >
      <v-col
      cols="5"
     > 
        <div class="holder1">
            <h1>
                Who Am I ?
            </h1>
    </div>
     </v-col>
     <v-col
      cols="5"
     > 
     <div class="holder2">
       <v-row
        align="center"
        justify="space-around"
        >
        <v-col>
            <div>
              <h2>Summary</h2>
              <p>
                I am a hard working, passionate and enthusiastic individual
                who <br> would like to be working on the next big piece of software.
              </p>
            </div>
            <div>
              <h2>Interests</h2>
                <p>
                Physical health is important to me, so I always keep fit. <br>
                I enjoy  good music. <br>
                I love exploring different art forms. <br>
                I am a huge fan of the technological field.
              </p>
            </div>
        </v-col>
        </v-row>
    </div>
     </v-col>
  </v-row>
  </v-parallax>
  <v-parallax
    
    src='../assets/test3.jpg'
  >
  <v-row
   align="center"
    justify="space-around"
  >
  <div>
    <h2 class="h2tag">Timeline</h2>
    <v-row>
      <v-col>
        <h3>Sep 2020 - Current </h3>
        <div class="current1">
         <p class="ptag">
           Started as an intern at LC Studio
        </p> 
        </div>
        </v-col>
      <v-col>
        <h3> March - August 2020 </h3>
        <div class="current2">
          <p class="ptag">
            Studied at Life Choices Academy
          </p>
        </div>
        </v-col>
      <v-col>
        <h3> Feb 2020</h3>
        <div class="current3">
          <p class="ptag">
            Studied at CPUT (Higher Certificate)
          </p>
        </div>
        </v-col>
      <v-col>
        <h3> Nov 2019</h3>
        <div class="current4">
          <p class="ptag">
            Completed Matric
            Christel House South Africa
          </p>
        </div>
        </v-col>
    </v-row>
  </div>
  </v-row>
  </v-parallax>
  </div>
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
<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#intro {
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
}
.container{
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
}
.holder1{
  width: 400px;
  border-style: solid;
  border-width: 7px;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: none;
}
.holder2{
  width: 350px;
  border-style: solid;
  border-width: 5px;
}
.current1{
  width: 250px;
  height: 155px;
  border-style: solid;
  border-width: 3px;
}
.current2{
  width: 250px;
  height: 155px;
  border-style: solid;
  border-width: 3px;
}
.current3{
  width: 250px;
  height: 155px;
  border-style: solid;
  border-width: 3px;
}
.current4{
  width: 250px;
  height: 155px;
  border-style: solid;
  border-width: 3px;
}
h1{
  color: white;
  font-family: verdana;
  font-size: 70px;
}
h2{
  color: #3b3b3b;
  font-family: verdana;
  font-size: 50px;
}
h2.h2tag{
  color: white;
  font-family: verdana;
  font-size: 50px;
  -webkit-text-stroke: 1.3px #000000;
}
h3{
  color: white;
  font-family: verdana;
  font-size: 27px;
  -webkit-text-stroke: 0.5px #000000;
}
p{
  color: #3b3b3b;
  font-family: verdana;
  font-size: 20px;
}
p.ptag{
  color: white;
  font-family: verdana;
  font-size: 30px;
  -webkit-text-stroke: 0.3px #000000;
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