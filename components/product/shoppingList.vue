<template>
  <drawer right expand-on-hover title="Carrito" icon="mdi-cart-outline" :subtitle="`${pickedQuantity} productos`">
    <product-detail v-for="product in productsInCart" :key="product.id" v-bind="product" />
    <template v-slot:bottom>
      culeado
    </template>
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
      productsInCart: 'product/productsInCart'
    }),
    pickedQuantity () {
      return this.productsInCart.length
    }
  }
}
</script>

<style>

</style>
