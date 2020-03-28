export const state = () => ({
  products: []
})

export const mutations = {
  addProduct (state, product) {
    state.products.push(product)
  },
  updateProducts (state, products) {
    state.products = products
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const products = await this.$axios.$get('http://localhost:3000/products')
    commit('updateProducts', products)
    commit('completeLoading', null, { root: true })
  }
}

export const getters = {
  products: state => state.products
}
