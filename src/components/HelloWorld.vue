<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/star-wars-logo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Star Wars Api
        </h1>

        <p class="subheading font-weight-regular">
          Use the Nav bar on left to search through pages.

          <br />Using the following rest api to data:
          <a href="https://swapi.dev/" target="_blank">Api</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
