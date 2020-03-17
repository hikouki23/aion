<template>
  <div>
    <span v-if="$fetchState.pending">Loading products...</span>
    <ul v-else>
      <li v-for="(product) in products" :key="product.id">
        <product v-bind="product" />
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable nuxt/no-this-in-fetch-data */
import { mapGetters } from 'vuex'
import product from './product.vue'

export default {
  components: {
    product
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
  },
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  }
}
</script>

<style>

</style>
