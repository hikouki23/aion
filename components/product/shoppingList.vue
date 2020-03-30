<template>
  <drawer right expand-on-hover title="Carrito" icon="mdi-cart-outline" subtitle="0 productos">
    <product-detail v-for="product in productsInCart" :key="product.id" />
  </drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import drawer from '../generic/drawer.vue'
import productDetail from './productDetail.vue'
export default {
  components: {
    drawer,
    productDetail
  },
  computed: {
    ...mapGetters({
      productsInCart: 'product/products'
    })
  }
}
</script>

<style>

</style>
