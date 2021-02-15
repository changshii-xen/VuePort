<template>
<v-parallax
    
    src='../assets/ten5.png'
  >
  <div class="text-center">
    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value1"
      color="primary"
    >
      {{ value1 }} || Python 
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value2"
      color="teal"
    >
      {{ value2 }} || mySQL
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value3"
      color="yellow"
    >
      {{ value3 }} || Javascript
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value4"
      color="primary"
    >
      {{ value4 }} || CSS
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value5"
      color="orange"
    >
      {{ value5 }} || HTML
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value6"
      color="#add8e6"
    >
      {{ value6 }} || React
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value7"
      color="purple"
    >
      {{ value7 }} || Bootstrap
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value8"
      color="green"
    >
      {{ value8 }} || VUEjs
    </v-progress-circular>

    <v-progress-circular
      :rotate="10"
      :size="170"
      :width="25"
      :value="value9"
      color="#ade6d8"
    >
      {{ value9 }} || Vuetify
    </v-progress-circular>
  </div>
  </v-parallax>
</template>
<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0,
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value1 === 75) {
          return (this.value1 = 0)
        }
        this.value1 += 5
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value2 === 70) {
          return (this.value2 = 0)
        }
        this.value2 += 10
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value3 === 85) {
          return (this.value3 = 0)
        }
        this.value3 += 5
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value4 === 90) {
          return (this.value4 = 0)
        }
        this.value4 += 10
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value5 === 90) {
          return (this.value5 = 0)
        }
        this.value5 += 10
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value6 === 75) {
          return (this.value6 = 0)
        }
        this.value6 += 5
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value7 === 70) {
          return (this.value7 = 0)
        }
        this.value7 += 10
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value8 === 95) {
          return (this.value8 = 0)
        }
        this.value8 += 5
      }, 1000)
      this.interval = setInterval(() => {
        if (this.value9 === 90) {
          return (this.value9 = 0)
        }
        this.value9 += 10
      }, 1000)
    },
  }
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>