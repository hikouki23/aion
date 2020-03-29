<template>
  <v-card-actions>
    <v-row justify="center">
      <quantity-picker />
      <v-col cols="4">
        <v-btn class="ml-2" fab dark color="blue">
          <v-icon dark>
            mdi-cart
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card-actions>
</template>

<script>
import quantityPicker from '../generic/quantityPicker.vue'

export default {
  components: { quantityPicker }
}
</script>

<style>

</style>
