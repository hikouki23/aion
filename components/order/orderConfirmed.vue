<template>
  <dialogMessage title="Orden confirmada" content="Tu orden fue confirmada, por favor aguardá mientras preparamos tu pedido" :show="orderConfirmed" @on-accepted="userAcknowlegde" />
</template>

<script>
import dialogMessage from '~/components/generic/dialogMessage.vue'
export default {
  components: {
    dialogMessage
  },
  props: {
    orderConfirmed: { type: Boolean, default: false }
  },
  data: () => ({
    on: {}
  }),
  methods: {
    userAcknowlegde () {
      this.$emit('on-dialog-closed')
    }
  }
}
</script>

<style>

</style>
