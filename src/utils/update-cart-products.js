export function updateCartProducts(store, products) {
  products.filter(item => item.type === 'VARIANT')
    .forEach(item => {
      const { variants } = store.state.menu.products.find(i => i._id === item._id)
      const selectedVariant = variants.find(i => i._id === item.selectedVariant._id)
      store.commit('menu.changeProductVariant', {
        productId: item._id,
        variant: selectedVariant
      })
    })
  store.commit('cart.setProducts', products)
}
