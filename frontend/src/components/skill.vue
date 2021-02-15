<template>
<div>
  <v-parallax
    
    src='../assets/10.png'
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
                Skills
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
              <h2>Languages and Frameworks I've worked with:</h2>
              <br>
                <v-row
                align="center"
                justify="space-around">
                     <div>
                        <img
                        src="https://img.icons8.com/color/48/000000/python.png"
                        alt="python"
                        />
                     </div>
                     <div>
                        <img
                        src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png"
                        alt="mySQL"
                        />
                     </div>
                     <div>
                        <img
                        src="https://img.icons8.com/color/64/000000/javascript.png"
                        alt="js"
                        />
                    </div> 
                    <div>
                        <img
                        src="https://img.icons8.com/color/48/000000/css3.png"
                        alt="CSS"
                        />
                    </div>  
                </v-row>
                <br>
                <v-row
                align="center"
                justify="space-around"
                >
                    <div>
                        <img
                        src="https://img.icons8.com/color/48/000000/html-5.png"
                        alt="html"
                        />
                     </div>
                     <div>
                         <img
                            src="https://img.icons8.com/color/48/000000/react-native.png"
                            alt="react"
                        />
                     </div>
                     <div>
                        <img
                            src="https://img.icons8.com/color/48/000000/bootstrap.png"
                            alt="Bootstrap"
                        />
                    </div>
                    <div>
                        <img 
                        src="https://img.icons8.com/color/48/000000/vue-js.png"
                        alt="Vue"
                        />
                     </div>  
                </v-row>
            </div>
        </v-col>
        </v-row>
    </div>
     </v-col>
  </v-row>
  </v-parallax>
  <v-parallax
    
    
  >
  <v-row
   align="center"
    justify="space-around"
  >
  <div>
    <h2>My Accounts</h2>
    <v-row>
      <v-col>
        <h3> Link To my Github</h3>
        <div class="current1">
         <a href="https://github.com/changshii-xen">
                  <img
                    class="github"
                    src="https://img.icons8.com/fluent/50/000000/github.png"
                    alt="github"
                  />
                </a>
        </div>
        
        <div class="current2">
        <h3>Link To my CodePen</h3>
         <a href="https://codepen.io/changshii-xen">
                  <img
                    class="pen"
                    src="https://img.icons8.com/ios-filled/50/000000/codepen.png"
                    alt="CodePen"
                  />
                </a>
        </div>
        </v-col>
      <v-col>
        <h3> Link To my LinkedIn</h3>
        <div class="current3">
          <a href="https://za.linkedin.com/in/siyamthanda-mgoqi-b090121a2?trk=profile-badge">
                  <img
                    class="link"
                    src="https://img.icons8.com/color/50/000000/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
        </div>
        </v-col>
    </v-row>
  </div>
  <div>
    <h2>My Work</h2>
    <v-row>
      <v-col>
        <h3>The IT Logger</h3>
        <div class="current1">
          <a href="https://itlogger1.netlify.app">
         <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-login
      </v-icon>
    </v-btn>
    </a>
        </div>
        <h3>Github Finder</h3>
        <div class="current1">
          <a href="https://siyaghfinder.netlify.app">
         <v-btn
      
      color="blue-grey"
      class="ma-2 white--text"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-github
      </v-icon>
    </v-btn>
    </a>
        </div>
        </v-col>
      <v-col>
        <h3>Contact Keeper</h3>
        <div class="current1">
          <a href="https://vuekeeper.netlify.app">
          <v-btn
      color="blue-grey"
      class="ma-2 white--text"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-contacts
      </v-icon>
    </v-btn>
           </a>
          
        </div>
        <h3>The Vision Project</h3>
        <div class="current1">
            <a href="https://the-v1sion.herokuapp.com">
            <v-btn
      color="blue-grey"
      class="ma-2 white--text"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-apps
      </v-icon>
    </v-btn>
        </a>
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
    data () {
      return {
        
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
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
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
  width: 350px;
  border-style: solid;
  border-width: 7px;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: none;
  margin-left: 15%;
}
.holder2{
  width: 100%;
  
}
.current1{
  width: 250px;
  height: 155px;
  
}
.current2{
  width: 250px;
  height: 155px;
  margin-left: 55%;
}
.current3{
  width: 250px;
  height: 155px;
  
  
}
.current4{
  width: 250px;
  height: 155px;
  
}
h1{
  color: white;
  font-family: verdana;
  font-size: 70px;
}
h2{
  color: #3b3b3b;
  font-family: verdana;
  font-size: 30px;
}
h3{
  color: #3b3b3b;
  font-family: verdana;
  font-size: 25px;
}
p{
  color: #000000;
  font-family: verdana;
  font-size: 20px;
}

.github {
  width: 65px;				
  height: auto;
  margin-left: 35%;
  margin-top: 10%;	
}
.pen {
  width: 65px;
  height: auto;
  margin-left: 35%;
}
.link {
  width: 65px;				
  height: auto;
  margin-left: 35%;	
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