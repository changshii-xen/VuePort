<template>
<div>
  <v-parallax
    
    src='../assets/7.jpg'
  >
  <v-row
  > 
      <v-col
      cols="5"
     > 
        <div class="holder1">
            <h1>
                Testimonials
            </h1>
    </div> <br>
    <div class="holder2">
      <v-row>
        <v-hover v-slot="{ hover }">
        <v-card>
          <v-img
          src='../assets/Thapelo.png'
          alt="John"
          class="image3"
        >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            <h3>"Siyamthanda is a Life Choices Academy student of 2020. He is a
              dedicated student who strives to solve problems by himself first.
              He has strong interpersonal skills and great debugging skills."<br> <h2>-Thapelo Tsotetsi <br> (Lecturer)</h2></h3>
          </div>
          </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
      <br> <br>
      <v-hover v-slot="{ hover }">
        <v-card>
          <v-img
          src='../assets/Sino.png'
          alt="John"
          class="image3"
        >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            <h3>"On a personal and professional level Siyamthanda is one that's always willing to support, encourage and assist. 
                Despite working with Siya for a short time, it's visible how much he tackles every challenge with an absolute passion and succeeds at it.
                It shows in his work and ethics how much he values mastery in programming  and alliance as part of his problem-solving techniques." <br> <h2>-Sinothando Bacela <br> (Collegue)</h2></h3>
          </div>
          </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card>
          <v-img
          src='../assets/Asaph.jpg'
          alt="John"
          class="image3"
        >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            <h3>""Siyamthanda is a really hard working person and if he doesn't
              understand something he makes sure he pushes himself to figure it
              out. He is a very curious."<br> <h2>-Asaph Franks <br> (Friend/Collegue)</h2></h3>
          </div>
          </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card>
          <v-img
          src='../assets/Yonela.png'
          alt="John"
          class="image3"
        >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
            style="height: 100%;"
          > 
            <h3>"Siyamthanda is a Life Choices Academy student of 2020. He is a
              dedicated student who strives to solve problems by himself first.
              He has strong interpersonal skills and great debugging skills." <br> <h2>-Yonela Ntsangana (Friend/Collegue)</h2>  </h3>
          </div>
          </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-row>
    </div>
     </v-col>
  </v-row>
  </v-parallax>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            h1 : "This is yeah"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#intro {
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
}
.image1{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: fill;
  justify-content: space-around;
  margin-left: 15px;
  
}
.image2{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: fill;
  justify-content: space-around;
  margin-left: 15px;
}
.image3{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: fill;
  justify-content: space-around;
  
}
.image4{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: fill;
  justify-content: space-around;
  margin-left: 15px;
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
  margin-left: 75px;
  
}
.holder2{
  width: 1200px;
  margin-left: 10%;
  justify-content: space-around;
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
  color: white;
  font-family: verdana;
  font-size: 20px;
}
h3{
  color: white;
  font-size: 15px;
}
p{
  color: #000000;
  font-family: verdana;
  font-size: 20px;
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