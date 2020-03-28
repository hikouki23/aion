<template>
  <div>
    <product-group v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<script>
/* eslint-disable nuxt/no-this-in-fetch-data */
import { mapGetters } from 'vuex'
import productGroup from '~/components/product/productGroup.vue'
export default {
  components: {
    productGroup
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
      categories: 'product/categories'
    })
  }
}
</script>

<style>

</style>
