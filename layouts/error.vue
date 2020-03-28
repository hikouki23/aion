<template>
  <div>
    <h1>error, gato</h1>
    <h3>{{ message }}</h3>
    <nuxt-link to="/">
      Go Home
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
  }
}
</script>

<style>

</style>
