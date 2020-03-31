<template>
  <div>
    <drawer
      right
      expand-on-hover
      title="Carrito"
      icon="mdi-cart-outline"
      :subtitle="`${pickedQuantity} productos`"
      class="d-xs-none"
    >
      <product-detail v-for="product in sortedProducts" :key="product.id" v-bind="product" @on-remove-product="removeProduct" @on-quantity-change="updateProduct" />
      <template v-slot:bottom>
        <v-row justify="center" no-gutters class="my-1">
          <v-col cols="6">
            <h3 class="headline ml-2 pb-2 text-truncate">
              Total: ${{ totalPrice }}
            </h3>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="6">
            <v-btn outlined class="ml-2 mb-4" @click="confirmOrder">
              Confirmar
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </drawer>
    <order-confirmed :order-confirmed="orderConfirmed" @on-dialog-closed="updateOrderStatus" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import drawer from '../generic/drawer.vue'
import productDetail from '../product/productDetail.vue'
import orderConfirmed from './orderConfirmed.vue'

export default {
  components: {
    drawer,
    productDetail,
    orderConfirmed
  },
  data () {
    return {
      hover: false,
      orderConfirmed: false
    }
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
    },
    confirmOrder () {
      this.orderConfirmed = true
    },
    updateOrderStatus () {
      this.orderConfirmed = false
    }
  }
}
</script>

<style>
</style>
