<template>
  <ApolloQuery :query="require('./../graphql/Lex.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <lex-layout :lexData="data.lex"></lex-layout>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
import LexLayout from "./LexLayout";
export default {
  name: "lexContainer",
  components: { LexLayout }
};
</script>
