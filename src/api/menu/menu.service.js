export default ({ $axios, store, router, $toast }) => ({
  async getMenu() {
    const menu = await $axios.$get('/api/products')
    const result = {
      ...menu,
      products: menu.products.map(product => {
        return {
          ...product,
          $id: product.title
            .toLowerCase()
            .replaceAll(' ', '-'),
          images: product.images.map(image => '/api/product/image/' + image)
        }
      })
    }

    store.commit('menu.setMenu', result)

    return result
  }
})
