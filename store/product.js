export const state = () => ({
  products: [],
  categories: []
})

export const mutations = {
  addProduct (state, product) {
    state.products.push(product)
  },
  updateProducts (state, products) {
    state.products = products
  },
  updateCategories (state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const products = await this.$axios.$get('http://localhost:3000/products')
    commit('updateProducts', products)
    commit('completeLoading', null, { root: true })
  },
  async getCategories ({ commit }) {
    const categories = await this.$axios.$get('http://localhost:3000/categories')
    commit('updateCategories', categories)
    commit('completeLoading', null, { root: true })
  }
}

export const getters = {
  products: state => state.products,
  categories: state => state.categories
}
