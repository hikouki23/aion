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
  },
  updateProduct (state, product) {
    state.productsInCart = [...state.productsInCart.filter(productInCart => productInCart.id !== product.id), product]
  },
  removeProduct (state, product) {
    state.productsInCart = [...state.productsInCart.filter(productInCart => productInCart.id !== product.id)]
  }
}

export const actions = {
}

export const getters = {
  productsInCart: state => state.productsInCart,
  categories: state => state.categories
}
