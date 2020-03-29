<template>
  <div>
    <h1>Hubo un error, por favor reintente en unos minutos</h1>
    <v-col cols="8">
      <v-alert dense type="error">
        {{ message }}
      </v-alert>
    </v-col>
    <nuxt-link to="/">
      Volver al Home
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    message () {
      return `${this.error.statusCode}:${this.error.message}`
    }
  },
  mounted () {
    if (this.$route.query.error) { this.error.message = this.$route.query.error }
    if (this.$route.query.code) { this.error.statusCode = this.$route.query.code }
  }
}
</script>

<style>

</style>
