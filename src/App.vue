<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-btn text to="/">
          <v-toolbar-title>Youlex</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/create" text>Lex do it!</v-btn>
          <v-btn to="/leges" text>My Leges</v-btn>
          <v-btn to="/lex" text>Lex S</v-btn>
          <v-btn to="/search" text>Browse</v-btn>
          <v-btn to="/membership" text>Membership</v-btn>
          <v-btn to="/about" text>About</v-btn>
          <v-spacer></v-spacer>
          <v-btn to="/login" text>Login</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <v-footer>
        <v-spacer></v-spacer>
        <div>&copy; 2020 Youlex</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>
