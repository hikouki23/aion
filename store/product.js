export const state = () => ({
  productsInCart: [],
  categories: []
})

export const mutations = {
  addProductToCart (state, product) {
    state.productsInCart.push(product)
  },
  updateCategories (state, categories) {
    state.categories = categories
  }
}

export const actions = {}

export const getters = {
  productsInCart: state => state.productsInCart,
  categories: state => state.categories
}
