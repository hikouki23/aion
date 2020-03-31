<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    fixed
    app
    :right="right"
    :expand-on-hover="expandOnHover"
  >
    <v-list>
      <v-list-item two-line :class="miniVariant && 'pl-3'">
        <v-icon v-if="icon">
          {{ icon }}
        </v-icon>
        <v-list-item-avatar v-else>
          <img :src="image">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
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
    <slot />
    <template v-slot:append>
      <v-divider class="mb-2" />
      <slot v-if="!mini-variant" name="bottom" />
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    miniVariant: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    expandOnHover: { type: Boolean, default: false },
    items: { type: Array, default () { return [] } },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>

<style>

</style>
