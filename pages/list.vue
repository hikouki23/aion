<template>
  <div>
    <h1>Productos</h1>
    <product-list />
  </div>
</template>

<script>
/* eslint-disable nuxt/no-this-in-fetch-data */
import productList from '~/components/product/productList.vue'
export default {
  components: {
    productList
  },
  async fetch () {
    try {
      await this.$store.dispatch('product/getProducts')
    } catch (e) {
      this.error({
        statusCode: 503,
        message: e.message
      })
    }
  }
}
</script>

<style>

</style>
