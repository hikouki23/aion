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
  getProducts ({ commit }) {
    this.$axios.$get('http://localhost:3000/products').then((response) => {
      commit('updateProducts', response)
    }).catch(err => console.log(err))
  }
}

export const getters = {
  products: state => state.products
}
