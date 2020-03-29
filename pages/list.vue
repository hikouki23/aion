<template>
  <div>
    <product-group v-for="category in allCategories" :key="category.id" :category="category" />
  </div>
</template>

<script>
/* eslint-disable nuxt/no-this-in-fetch-data */
import productGroup from '~/components/product/productGroup.vue'
import allCategories from '~/queries/allCategories.gql'

export default {
  apollo: {
    allCategories: {
      query: allCategories,
      error (err) {
        this.$router.push({ path: 'error', query: { error: err.message, code: err.networkError.statusCode } })
      }
    }
  },
  components: {
    productGroup
  }
}
</script>

<style>

</style>
