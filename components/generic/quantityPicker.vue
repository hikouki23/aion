<template>
  <div>
    <v-text-field v-model="quantity" :rules="[validationRules.min]" class="py-0" label="Cantidad" @input="$emit('update-quantity', quantity)">
      <template v-slot:append-outer>
        <v-btn icon color="secondary" @click="quantity > 1 ? updateQuantity(-1) : 0">
          <v-icon small>
            mdi-minus
          </v-icon>
        </v-btn>
        <v-btn icon color="secondary" @click="updateQuantity(1)">
          <v-icon small>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    quantityPicked: { type: Number, default: 1 }
  },
  data () {
    return {
      quantity: 1,
      validationRules: {
        min: value => value > 0 ? true : 'Elegi al menos 1'
      }
    }
  },
  computed: {
    quantityText () {
      return this.quantity.toString()
    }
  },
  mounted () {
    this.quantity = this.quantityPicked
  },
  methods: {
    updateQuantity (delta) {
      this.quantity = parseInt(this.quantity) + delta

      this.$emit('update-quantity', this.quantity)
    }
  }
}
</script>

<style>

</style>
