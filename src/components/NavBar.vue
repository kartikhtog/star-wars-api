<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="middle text-uppercase primary--text">
        {{ heading }}
      </v-toolbar-title>
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo.png')"
          transition="scale-transition"
          width="80"
        >
        </v-img>
      </router-link>
        <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/kartikhtog/star-wars-api"
        target="_blank"
        text
      >
        <span class="mr-2">Source</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="accent">
      <v-list>
        <v-list-item
          v-for="route in routes"
          :disabled="!route.enabled"
          :key="route.title"
          link
          router
          :to="route.route"
        >
          <v-list-item-icon>
            <v-icon color="icons_color">{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="secondary--text">{{
              route.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      routes: [
        {
          title: "Home",
          icon: "mdi-view-dashboard",
          route: "/",
          enabled: true,
        },
        {
          title: "People",
          icon: "mdi-view-dashboard",
          route: "/planets",
          enabled: true,
        },
        {
          title: "Planets",
          icon: "mdi-view-dashboard",
          route: "/films",
          enabled: true,
        },
        {
          title: "Films",
          icon: "mdi-view-dashboard",
          route: "/films",
          enabled: true,
        },
        {
          title: "Species",
          icon: "mdi-view-dashboard",
          route: "/films",
          enabled: true,
        },
        {
          title: "Vehicles",
          icon: "mdi-view-dashboard",
          route: "/films",
          enabled: true,
        },
        {
          title: "Starships",
          icon: "mdi-view-dashboard",
          route: "/films",
          enabled: true,
        },
      ],
    };
  },
  props: {
    heading: {
      type: String,
      default: "Star Wars",
    },
  },
  computed() {},
};
</script>