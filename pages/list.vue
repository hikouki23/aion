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
      query: allCategories
    }
  },
  components: {
    productGroup
  }
}
</script>

<style>

</style>
