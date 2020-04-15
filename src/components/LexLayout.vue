<template>
  <div>
    <v-card @click="$vuetify.goTo(0)" tile raised class="custom-top-card"
      ><v-row
        ><v-col class="pt-1" cols="8"
          ><div class="font-weight-bold">{{ lexData.title }}</div>
          <div class="font-weight-thin font-italic">
            {{ lexData.owner.name }}
          </div></v-col
        ><v-col cols="4"
          ><v-btn icon><v-icon>mdi-arrow-collapse-up</v-icon></v-btn></v-col
        ></v-row
      ></v-card
    >
    <v-card outlined fixed>
      <h1 class="">{{ lexData.title }}</h1>
      <em>from {{ lexData.owner.name }}</em>
      <blockquote>{{ lexData.description }}</blockquote>
    </v-card>
    <v-container class="overflow-y-auto">
      <v-row no-gutters>
        <v-col xs="12">
          <blockquote>{{ lexData.contents.preambule }}</blockquote>
          <div
            v-for="section in lexData.contents.sections"
            :key="section.title"
          >
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
                <v-btn
                  ><span>amendments</span>
                  <v-icon right>mdi-bank-transfer</v-icon>
                </v-btn>

                <v-btn
                  ><span>history</span>
                  <v-icon right>mdi-history</v-icon>
                </v-btn>

                <v-btn
                  ><span>debate</span>
                  <v-icon right>mdi-comment-text-multiple</v-icon>
                </v-btn>

                <v-btn
                  ><span>wiki</span>
                  <v-icon right>mdi-help</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div>
                  This is where you have commands for the Lex. They are sorted
                  by category (amendments, history, discussion, wiki)
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
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

<style scoped>
.custom-top-card {
  position: fixed;
  right: 0;
  top: 0;
  height: 56px;
  z-index: 1;
  border-bottom-left-radius: 24px;
  background-color: #f5f5f5;
  width: 50%;
  padding: 0px 20px;
}
</style>
