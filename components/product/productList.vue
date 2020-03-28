<template>
  <div>
    <span v-if="loading">Loading products...</span>
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
import { mapGetters } from 'vuex'
import product from './product.vue'

export default {
  components: {
    product
  },
  computed: {
    ...mapGetters({
      products: 'product/products',
      loading: 'loading'
    })
  }
}
</script>

<style>

</style>
