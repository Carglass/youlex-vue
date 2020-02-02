<template>
  <v-list flat>
    <template v-for="feedItem in feedData">
      <v-list-item two-line :key="feedItem.id">
        <v-list-item-content>
          <v-list-item-title>{{ feedItem.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            feedItem.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="feedItem.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "feed",
  props: {
    feedData: Array
  }
};
</script>
