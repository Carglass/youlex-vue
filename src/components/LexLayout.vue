<template>
  <div>
    <v-row>
      <v-col lg="8">
        <h1>{{ lexData.title }}</h1>
        <em>from {{ lexData.owner.name }}</em>
        <blockquote>{{ lexData.description }}</blockquote>
        <blockquote>{{ lexData.contents.preambule }}</blockquote>
        <div v-for="section in lexData.contents.sections" :key="section.title">
          <h2>{{ section.title }}</h2>
          <div v-for="article in section.articles" :key="article.title">
            <h3>{{ article.title }}</h3>
            <div v-for="alinea in article.alineas" :key="alinea.text">
              <p>{{ alinea.text }}</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col lg="4">
        <v-sheet elevation="3" tile="tile">
          <v-row no-gutters justify="center">
            <v-btn-toggle v-model="toggle_exclusive" tile mandatory>
              <v-btn icon>
                <v-icon>mdi-bank-transfer</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-history</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-comment-text-multiple</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-help</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div>
                This is where you have commands for the Lex. They are sorted by
                category (amendments, history, discussion, wiki)
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "lexLayout",
  props: {
    lexData: Object
  },
  data() {
    return {
      toggle_exclusive: 2
    };
  }
};
</script>
