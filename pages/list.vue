<template>
  <div>
    <h1>Productos</h1>
    <product-list />
    <button @click="$store.dispatch('product/getProducts')">
      Refresh products
    </button>
  </div>
</template>

<script>
import productList from '~/components/product/productList.vue'
export default {
  components: {
    productList
  }
}
</script>

<style>

</style>
