import {translit} from "@/utils/translit";

export async function getMenu($axios, store) {
  const menu = await $axios.$get('/api/products')
  const result = {
    ...menu,
    products: menu.products
      .filter(item => item.type === 'SINGLE' || (item.type === 'VARIANT' && item.variants.length > 0))
      .map(product => {
        return {
          ...product,
          $id: translit(
            product.title
              .toLowerCase()
              .replaceAll(' ', '-')
          ),
          images: product.images.map(image => '/api/product/image/' + image),
          selectedVariant: product.type === 'VARIANT' ? (
            product.variants?.[0]
          ) : null
        }
      })
  }

  store.commit('menu.setMenu', result)

  return result
}

export default ({ $axios, store, router, $toast }) => ({
  async changeProductVariant(productId, variant) {
    store.commit('menu.changeProductVariant', { productId, variant })
  }
})
