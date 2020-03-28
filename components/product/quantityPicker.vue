<template>
  <div>
    <v-text-field label="Cantidad" :placeholder="quantityText">
      <template v-slot:append>
        <v-btn icon color="black" @click="quantity > 0 ? quantity -- : 0">
          <v-icon small>
            mdi-minus
          </v-icon>
        </v-btn>
        <v-btn icon color="black" @click="quantity ++">
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
  data () {
    return { quantity: 0 }
  },
  computed: {
    quantityText () {
      return this.quantity.toString()
    }
  }
}
</script>

<style>

</style>
