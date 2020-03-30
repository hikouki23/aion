export const state = () => ({
  productsInCart: [],
  categories: []
})

export const mutations = {
  addProductToCart (state, productId) {
    state.productsInCart.push(productId)
  },
  updateProducts (state, products) {
    state.products = products
  },
  updateCategories (state, categories) {
    state.categories = categories
  }
}

export const actions = {

}

export const getters = {
  products: state => state.products,
  categories: state => state.categories
}
