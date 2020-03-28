<template>
  <div>
    <drawer :mini-variant="miniVariant" />
    <v-app-bar
      :clipped-left="false"
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title class="indigo--text" v-text="title" />
      <v-toolbar-title>
        CRM
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import drawer from './drawer.vue'
export default {
  components: { drawer },
  data () {
    return {
      clipped: false,
      miniVariant: false,
      title: 'Aion'
    }
  }
}
</script>

<style>

</style>
