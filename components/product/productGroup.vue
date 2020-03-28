<template>
  <div>
    <h2>{{ category.name }}</h2>
    <product-list :category="category" />
  </div>
</template>

<script>
import productList from './productList.vue'
export default {
  components: {
    productList
  },
  props: {
    category: { type: Object, default: () => { } }
  }
}
</script>

<style>

</style>
