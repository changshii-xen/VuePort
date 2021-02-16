<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Thank you for taking a moment to review this
        portfolio that  represents my coding abilities and knowledge, while 
        also outlining what type of person I am and why I am a good canditate to
        be part of your orginisation.
        I hope you found it  interesting, pleasing, and exceptional.
        To find out more about how I am please feel free to look through my social media, links are provided above.
        <br> If you wish to send me and email right now you can do so below: 
      </v-card-text>
      <form
  action="https://formspree.io/f/mvovyben"
  method="POST"
>
  <v-row
  align="center"
    justify="space-around"
    no-gutters
  >
      <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <v-text-field
            label="Your Email"
            type="text" 
            name="_replyto"
            outlined
          ></v-text-field>
        </v-col>
    <v-col
        cols="12"
        md="6"
      >
        <v-textarea
          filled
          name="message"
          label="Message"
        ></v-textarea>
      </v-col>
  </v-row>
  
  <br>
    
   

  <!-- your other form fields go here -->

  <button type="submit">Send</button>
</form>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Siyamthanda Portfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
#footer {
  height: 60px;
  align-items: center;
  /* border-top: 1px solid rgb(220, 212, 212); */
  justify-content: center;
}
span {
  display: block;
}
.icons {
  display: flex;
  margin-left: 10px;
}
.background:hover {
  cursor: pointer;
}
</style>
