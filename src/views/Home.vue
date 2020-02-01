<template>
  <div>
    <h1 class="display-4 font-weight-black text-center">
      A tool for Modern Democracies
    </h1>
    <highlight-carousel></highlight-carousel>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="6">
        <div class="my-6">
          <v-btn x-large color="secondary">Sign Up</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" sm="6"
        ><div class="my-6">
          <v-btn x-large color="primary">Login</v-btn>
        </div></v-col
      >
    </v-row>
  </div>
</template>

<script>
import HighlightCarousel from "./../components/HighlightCarousel";

export default {
  name: "home",
  components: { HighlightCarousel }
};
</script>
