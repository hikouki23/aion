<template>
  <v-app dark>
    <nav-bar />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <page-footer />
  </v-app>
</template>

<script>
import pageFooter from '~/components/generic/footer.vue'
import navBar from '~/components/generic/navBar.vue'

export default {
  components: {
    pageFooter,
    navBar
  }
}
</script>
