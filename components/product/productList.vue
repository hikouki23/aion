<template>
  <div>
    <span v-if="$fetchState.pending">Loading products...</span>
    <v-row dense>
      <v-col
        v-for="(product) in products"
        :key="product.id"
        cols="12"
        sm="6"
        lg="2"
      >
        <product v-bind="product" />
      </v-col>
    </v-row>
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
