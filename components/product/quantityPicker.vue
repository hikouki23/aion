<template>
  <div>
    <v-col cols="8" class="float-right pr-0">
      <v-text-field label="Cantidad" :placeholder="quantityText">
        <template v-slot:append-outer>
          <v-btn icon color="secondary" @click="quantity > 0 ? quantity -- : 0">
            <v-icon small>
              mdi-minus
            </v-icon>
          </v-btn>
          <v-btn icon color="secondary" @click="quantity ++">
            <v-icon small>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-col>
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
