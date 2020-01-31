<template>
  <div>
    <p class="display-4 font-weight-black">A tool for Modern Democracies</p>
    <v-carousel>
      <v-carousel-item
        v-for="highlight in highlights"
        :key="highlight.id"
        :src="highlight.img"
        ><v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ highlight.name }}</div>
        </v-row></v-carousel-item
      >
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      highlights: [
        {
          name: "Test",
          img: "https://via.placeholder.com/1600/900/0000FF?text=''",
          id: 1
        },
        {
          name: "Test2",
          img: "https://via.placeholder.com/1600/900/00FF00?text=''"
        },
        {
          name: "Test3",
          img: "https://via.placeholder.com/1600/900/FF0000/808080?text=''"
        }
      ]
    };
  }
};
</script>
