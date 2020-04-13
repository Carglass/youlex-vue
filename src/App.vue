<template>
  <div id="app">
    <v-app>
      <v-app-bar app collapse-on-scroll>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title text to="/">
          <v-toolbar-title>Youlex</v-toolbar-title>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/login" icon><v-icon>mdi-login</v-icon></v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary app>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/create">
              <v-list-item-icon>
                <v-icon>mdi-plus-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lex do it!</v-list-item-title>
            </v-list-item>

            <v-list-item to="/leges">
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Leges</v-list-item-title>
            </v-list-item>

            <v-list-item to="/lex">
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lex</v-list-item-title>
            </v-list-item>

            <v-list-item to="/search">
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Browse</v-list-item-title>
            </v-list-item>

            <v-list-item to="/membership">
              <v-list-item-icon>
                <v-icon>mdi-account-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Membership</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-help-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <router-view />
      </v-content>
      <v-footer>
        <v-spacer></v-spacer>
        <div>&copy; 2020 Youlex</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>
