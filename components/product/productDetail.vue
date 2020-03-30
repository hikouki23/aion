<template>
  <v-card class="mx-auto" max-width="20rem">
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
              <quantity-picker @update-quantity="updateQuantity" />
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
    showCartButton: { type: Boolean, default: false }
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
  methods: {
    updateQuantity (val) {
      this.quantity = val
    },
    addProductToCart () {
      this.$store.commit('product/addProductToCart', this.id)
    }
  }
}
</script>

<style></style>
