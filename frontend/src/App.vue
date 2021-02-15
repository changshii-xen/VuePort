<template>
  <v-app>
    <v-main>
      <Nav />
      <Welcome id="welcome"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Rating id="rating"/>
      <Other id="other"/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";
import Skills from "./components/skill";
import Other from "./components/Testimonials";
import Rating from "./components/rating";
import Welcome from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Welcome,
    About, 
    Skills,
    Rating ,
    Other,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(rgb(214, 163, 189), rgb(116, 101, 155));
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(182, 99, 99);
}
</style>
