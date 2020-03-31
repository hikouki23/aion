<template>
  <drawer
    right
    expand-on-hover
    title="Carrito"
    icon="mdi-cart-outline"
    :subtitle="`${pickedQuantity} productos`"
  >
    <product-detail v-for="product in sortedProducts" :key="product.id" v-bind="product" @on-remove-product="removeProduct" @on-quantity-change="updateProduct" />
    <template v-slot:bottom>
      <h3 class="headline pb-2">
        Total: ${{ totalPrice }}
      </h3>
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
    sortedProducts () {
      return this.productsInCart.slice(0).sort((productA, productB) => productA.id - productB.id)
    },
    totalPrice () {
      return this.productsInCart.reduce((accumulator, product) => accumulator + product.pricePerUnity * product.quantityPicked, 0)
    },
    pickedQuantity () {
      return this.productsInCart.length
    }
  },
  methods: {
    updateProduct (product) {
      this.$store.commit('product/updateProduct', product)
    },
    removeProduct (product) {
      this.$store.commit('product/removeProduct', product)
    }
  }
}
</script>

<style>

</style>
