<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="0">
      <!-- <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon> -->
      <h3 class="font-weight-thin">Sales Overview Dashboard</h3>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" color="primary" class="mr-2">{{
        buttonText
      }}</v-btn>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
    >
      <v-list dense color="primary" dark>
        <v-list-item>
          <v-list-item-action @click="toggleMini = !toggleMini">
            <v-icon v-if="!toggleMini"> mdi-chevron-left</v-icon>
            <v-icon v-else> mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          Bastiaan Boersma
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.href"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="primary--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer class="py-3">
      <span class="ml-auto overline">Iatek &copy;2020</span>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },
  data: () => ({
    sidebarMenu: true,
    toggleMini: true,
    items: [
      { title: "Home", href: "/", icon: "mdi-home-outline" },
      { title: "Detections", href: "/detections", icon: "mdi-shield-account" },
      { title: "Components", href: "/comp", icon: "mdi-palette-swatch" },
      {
        title: "Customers",
        href: "/customers",
        icon: "mdi-account-search-outline",
      },
      { title: "Orders", href: "/orders", icon: "mdi-bus-clock" },
      { title: "Settings", href: "/settings", icon: "mdi-settings-outline" },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
