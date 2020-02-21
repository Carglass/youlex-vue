<template>
  <v-list flat>
    <template v-for="feedItem in feedData">
      <feed-item :key="feedItem.id" :feedItemData="feedItem"></feed-item>
    </template>
  </v-list>
</template>

<script>
import FeedItem from "./FeedItem";
export default {
  name: "feed",
  props: {
    feedData: Array
  },
  components: { FeedItem }
};
</script>
