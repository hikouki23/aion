<template>
  <v-card class="mx-auto" max-width="20rem">
    <v-icon v-if="!showCartButton" class="clickable float-right" @click="removeProductFromCart">
      mdi-close
    </v-icon>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline font-weight-thin mb-4">
          {{ description }}
        </div>
        <v-img :src="imgLink" max-height="130" contain :aspect-ratio="aspect" />
        <v-list-item-title class="headline mb-1">
          <v-row>
            <v-col>
              ${{ price }}
            </v-col>
            <v-col cols="8">
              <quantity-picker :quantity-picked="quantityPicked" @update-quantity="updateQuantity" />
            </v-col>
          </v-row>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ company }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-row justify="center">
        <v-col v-if="showCartButton" cols="4">
          <v-btn class="ml-2" fab dark color="blue" @click="addProductToCart">
            <v-icon dark>
              mdi-cart
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import quantityPicker from '../generic/quantityPicker.vue'
export default {
  components: {
    quantityPicker
  },
  props: {
    id: { type: String, default: '1' },
    productCode: { type: String, default: 'Missing model number' },
    description: { type: String, default: 'Missing description' },
    imgLink: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzZo00tgwhMc1-CzXMsLtDdbDoeZ5IqOcOMKfobr6JwPHeQVyz'
    },
    company: { type: String, default: 'Missing company' },
    aspect: { type: String, default: '1' },
    pricePerUnity: { type: Number, default: 99999 },
    showCartButton: { type: Boolean, default: false },
    quantityPicked: { type: Number, default: 1 }
  },
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    price () {
      return this.pricePerUnity * this.quantity
    }
  },
  mounted () {
    if (this.quantityPicked > 1) { this.quantity = this.quantityPicked }
  },
  methods: {
    updateQuantity (val) {
      this.quantity = val
      this.$emit('on-quantity-change', this.getProduct())
    },
    addProductToCart () {
      this.$store.commit('product/addProductToCart', this.getProduct())
    },
    removeProductFromCart () {
      this.$emit('on-remove-product', this.getProduct())
    },
    getProduct () {
      return { id: this.id, quantityPicked: this.quantity, description: this.description, company: this.company, pricePerUnity: this.pricePerUnity, imgLink: this.imgLink }
    }
  }
}
</script>

<style>
.clickable{
  cursor:pointer
}
</style>
