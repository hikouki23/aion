<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    miniVariant: { type: Boolean, default: false }
  },
  data () {
    return {
      drawer: true,
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
        }
      ]
    }
  }
}
</script>

<style>

</style>
