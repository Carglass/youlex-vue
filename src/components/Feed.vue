<template>
  <v-list flat>
    <template v-for="feedItem in feedData">
      <feed-item
        :key="feedItem.id"
        type="AMENDMENT"
        :subject="feedItem.title"
        :target="feedItem.title"
        :id="feedItem.id.toString()"
      ></feed-item>
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
