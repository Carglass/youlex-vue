<template>
  <v-list-item two-line :key="feedItemData.id">
    <v-list-item-content>
      <v-list-item-title>{{ text }}</v-list-item-title>
      <v-list-item-subtitle>
        <action-icon
          v-for="(action, index) in actions"
          :key="index"
          :action="action"
        ></action-icon>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import ActionIcon from "./ActionIcon";

export default {
  name: "feedItem",
  components: { ActionIcon },
  props: {
    feedItemData: {
      type: Object,
      required: true
    }
  },
  computed: {
    text() {
      // returning the tet to display for a given feedItem type
      // it takes into account the subject, target etc through templating
      switch (this.feedItemData.type) {
        case "CREATION":
          return `${this.feedItemData.subject.name} has created ${this.feedItemData.target.title}`;
        case "QUESTION":
          return `${this.feedItemData.subject.name} has raised a new question on ${this.feedItemData.complement.title}`;
        case "ANSWER":
          return `${this.feedItemData.subject.name} has answered ${this.feedItemData.target.title} in ${this.feedItemData.complement.title}`;
        case "OPENVOTE":
          return `A vote has been opened by ${this.feedItemData.subject.name} on ${this.feedItemData.target.title}`;
        case "AMENDMENT":
          return `${this.feedItemData.subject.name} has created an amendment on ${this.feedItemData.target.title}`;
        case "AMENDMENT_VOTE":
          return `A vote has been opened by ${this.feedItemData.subject.name} on the amendment ${this.feedItemData.target.title}`;
        case "DEBATE":
          return `${this.feedItemData.subject.name} has started a new debate on ${this.feedItemData.target.title}`;
        case "DEBATE_TRIBUTE":
          return `${this.feedItemData.subject.name} reacted to ${this.feedItemData.target.title}`;
        case "REVISION":
          return `${this.feedItemData.subject.name} has released a new version of ${this.feedItemData.target.title}`;
        default:
          // TODO for dev, needs to be removed or handled more gracefully eventually
          throw new Error("Feed Type is not correct");
      }
    },
    mainAction() {
      // returning the main action for a given feedItem type
      switch (this.feedItemData.type) {
        case "CREATION":
          return "WATCH";
        case "QUESTION":
          return "ANSWER";
        case "ANSWER":
          return "UPVOTE";
        case "OPENVOTE":
          return "VOTE";
        case "AMENDMENT":
          return "OPEN";
        case "AMENDMENT_VOTE":
          return "VOTE";
        case "DEBATE":
          return "DISCUSS";
        case "DEBATE_TRIBUTE":
          return "UPVOTE";
        case "REVISION":
          return "OPEN";
        default:
          // TODO for dev, needs to be removed or handled more gracefully eventually
          throw new Error("Feed Type is not correct");
      }
    },
    actions() {
      // listing the possible actions for a given feedItem type
      switch (this.feedItemData.type) {
        case "CREATION":
          return ["WATCH"];
        case "QUESTION":
          return ["ANSWER", "UPVOTE", "DOWNVOTE"];
        case "ANSWER":
          return ["ANSWER", "UPVOTE", "DOWNVOTE"];
        case "OPENVOTE":
          return ["VOTE", "WATCH"];
        case "AMENDMENT":
          return ["UPVOTE", "DOWNVOTE", "DISCUSS", "WATCH"];
        // TODO add a case for an amendment approved
        case "AMENDMENT_VOTE":
          return ["VOTE", "WATCH"];
        case "DEBATE":
          return ["DISCUSS", "WATCH"];
        case "DEBATE_TRIBUTE":
          return ["DISCUSS", "UPVOTE", "DOWNVOTE", "WATCH"];
        case "REVISION":
          return ["OPEN", "WATCH"];
        default:
          // TODO for dev, needs to be removed or handled more gracefully eventually
          throw new Error("Feed Type is not correct");
      }
    }
  }
};
</script>
