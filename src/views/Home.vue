<template>
  <div>
    <h1 class="display-4 font-weight-black text-center">
      A tool for Modern Democracies
    </h1>
    <highlight-carousel></highlight-carousel>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="6">
        <v-btn block color="secondary">Sign Up</v-btn>
      </v-col>
      <v-col class="text-center" cols="12" sm="6">
        <v-btn block color="primary">Login</v-btn>
      </v-col>
    </v-row>
    <feed :feedData="feed"></feed>
  </div>
</template>

<script>
import HighlightCarousel from "./../components/HighlightCarousel";
import Feed from "./../components/Feed";

export default {
  name: "home",
  components: { HighlightCarousel, Feed },
  data() {
    return {
      feed: [
        {
          title: "Congress published a new bill",
          description: "Hello hello",
          id: 1
        },
        {
          title: "Patrick commented on Ecology bill",
          description: "Hello hello",
          id: 2
        }
      ]
    };
  }
};
</script>
