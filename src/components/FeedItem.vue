<template>
  <v-list-item two-line :key="id">
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
    type: {
      type: String,
      required: true
    },
    subject: {
      // TODO could become a user?
      type: String,
      // Evaluate if eternal user such as Congress published bills is a subject or hardcoded
      required: true
    },
    target: {
      // TODO could become an object as well?
      type: String,
      required: true
    },
    complement: {
      // TODO could potentially become an Array if more than one
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    text() {
      // returning the tet to display for a given feedItem type
      // it takes into account the subject, target etc through templating
      switch (this.type) {
        case "CREATION":
          return `${this.subject} has created ${this.target}`;
        case "QUESTION":
          return `${this.subject} has raised a new question on ${this.complement}`;
        case "ANSWER":
          return `${this.subject} has answered ${this.target} in ${this.complement}`;
        case "OPENVOTE":
          return `A vote has been opened by ${this.subject} on ${this.target}`;
        case "AMENDMENT":
          return `${this.subject} has created an amendment on ${this.target}`;
        case "AMENDMENT_VOTE":
          return `A vote has been opened by ${this.subject} on the amendment ${this.target}`;
        case "DEBATE":
          return `${this.subject} has started a new debate on ${this.target}`;
        case "DEBATE_TRIBUTE":
          return `${this.subject} reacted to ${this.target}`;
        case "REVISION":
          return `${this.subject} has released a new version of ${this.target}`;
        default:
          // TODO for dev, needs to be removed or handled more gracefully eventually
          throw new Error("Feed Type is not correct");
      }
    },
    mainAction() {
      // returning the main action for a given feedItem type
      switch (this.type) {
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
      switch (this.type) {
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
