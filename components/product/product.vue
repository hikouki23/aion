<template>
  <v-card class="mx-auto" max-width="20rem">
    <v-img class="white--text align-end">
      <v-card-title>{{ description }}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    modelNumber: { type: String, default: 'Missing model number' },
    description: { type: String, default: 'Missing description' }
  }
}
</script>

<style>

</style>
