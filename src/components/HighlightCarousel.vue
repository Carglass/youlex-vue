<template>
  <ApolloQuery :query="require('./../graphql/Highlights.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-carousel>
          <v-carousel-item
            v-for="highlight in data.highlights"
            :key="highlight.id"
            :src="highlight.img"
            ><v-row class="fill-height flex-row-reverse">
              <v-col cols="5" class="pa-10 black white--text">
                <div class="display-3">{{ highlight.title }}</div>
                <div class=".body-1">{{ highlight.description }}</div>
              </v-col>
            </v-row></v-carousel-item
          >
        </v-carousel>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "highlightCarousel"
};
</script>
