<template>
  <div class="text-center">
    <v-dialog
      :value="show"
      :fullscreen="$vuetify.breakpoint.name === 'xs'"
      max-width="50rem"
      @click:outside="userAcknowledge"
    >
      <template v-slot:activator>
        <slot />
      </template>

      <v-card>
        <v-card-title
          class="display-2"
          primary-title
        >
          {{ title }}
        </v-card-title>
        <v-card-text class="headline">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="userAcknowledge"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    show: { type: Boolean, default: false }
  },
  methods: {
    userAcknowledge () {
      this.$emit('on-accepted')
    }
  }
}
</script>
