export const state = () => ({
  loading: true
})

export const mutations = {
  completeLoading (state) {
    state.loading = false
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('product/getProducts')
  }
}

export const getters = {
  loading: state => state.loading
}
