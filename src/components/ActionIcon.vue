<template>
  <v-btn icon>
    <v-icon>{{ iconId }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "actionIcon",
  props: {
    action: {
      type: String,
      required: true
    }
  },
  computed: {
    iconId() {
      switch (this.action) {
        case "WATCH":
          return "mdi-eye";
        case "VOTE":
          return "mdi-vote";
        case "UPVOTE":
          return "mdi-thumb-up-outline";
        case "DOWNVOTE":
          return "mdi-thumb-down-outline";
        case "DISCUSS":
          return "mdi-comment-outline";
        case "ANSWER":
          return "mdi-comment-check-outline";
      }
      return "";
    }
  }
};
</script>
