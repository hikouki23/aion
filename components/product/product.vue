<template>
  <v-card class="mx-auto" max-width="20rem">
    <v-img
      :src="imgLink"
      max-height="130"
      contain
      :aspect-ratio="aspect"
    />
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ company }}
        </div>
        <v-list-item-title class="headline mb-1">
          ${{ price }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <quantity-picker />
    </v-card-actions>
  </v-card>
</template>

<script>
import quantityPicker from './quantityPicker.vue'

export default {
  components: { quantityPicker },
  props: {
    productCode: { type: String, default: 'Missing model number' },
    description: { type: String, default: 'Missing description' },
    imgLink: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzZo00tgwhMc1-CzXMsLtDdbDoeZ5IqOcOMKfobr6JwPHeQVyz' },
    company: { type: String, default: 'Missing company' },
    aspect: { type: String, default: '1' },
    price: { type: Number, default: 99999 }
  }
}
</script>

<style>

</style>
