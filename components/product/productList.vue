<template>
  <div>
    <div v-if="$apollo.loading">
      <v-progress-circular class="ml-4" size="70" indeterminate color="blue" />
    </div>
    <v-row dense>
      <v-col
        v-for="(product) in allProducts"
        :key="product.id"
        cols="12"
        sm="6"
        lg="2"
      >
        <product-detail v-bind="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import productDetail from './productDetail.vue'

export default {
  components: {
    productDetail
  },
  props: {
    category: { type: Object, default () { return { id: 1 } } }
  },
  apollo: {
    allProducts: {
      query: gql`query allProducts($category: Int!) {
      allProducts(filter: {
        category: $category
      }){
        id
        company
        description
        imgLink
        price
      },
    }`,
      error (err) {
        this.$router.push({ path: 'error', query: { error: err.message, code: err.networkError.statusCode } })
      },
      variables () {
        return { category: this.category.id }
      }
    }
  }
}
</script>

<style>

</style>
