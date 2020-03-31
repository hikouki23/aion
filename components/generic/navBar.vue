<template>
  <div>
    <drawer :mini-variant="miniVariant" :items="items" image="/lagenologo.png" title="Menu" />
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
        Compras
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
      miniVariant: true,
      title: 'LaGeno',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-cart-arrow-down',
          title: 'Productos',
          to: '/List'
        },
        {
          icon: 'mdi-account',
          title: 'Tus datos',
          to: '/Profile'
        },
        {
          icon: 'mdi-barcode',
          title: 'Tus pedidos',
          to: '/Orders'
        }
      ]
    }
  }
}
</script>

<style>

</style>
