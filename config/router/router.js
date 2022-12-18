module.exports = {
  middleware: ['router-middleware'],
  extendRoutes(routes, resolve) {
    routes.push({
      path: '/contacts',
      name: 'contacts',
      meta: { background: 'base' },
      component: resolve('~/components/pages/contactsPage/Contacts')
    }, {
      path: '/delivery',
      name: 'delivery',
      meta: { background: 'base' },
      component: resolve('~/components/pages/deliveryPage/DeliveryPage')
    }, {
      path: '/stocks',
      name: 'stocks',
      meta: { background: 'base' },
      component: resolve('~/components/pages/stocksPage/StocksPage')
    }, {
      path: '/login',
      name: 'login',
      meta: { background: 'waves' },
      component: resolve('~/components/pages/loginPage/LoginPage')
    }, {
      path: '/favorites',
      name: 'favorites',
      meta: { background: 'waves' },
      component: resolve('~/components/pages/favoritesPage/FavoritesPage')
    }, {
      path: '/profile',
      component: resolve('~/components/pages/profilePage/ProfilePage'),
      children: [{
        path: '/profile',
        name: 'profile-info',
        meta: {
          requiresAuth: true,
          background: 'waves'
        },
        component: resolve('~/components/pages/profilePage/info/Info')
      }, {
        path: '/profile/orders',
        name: 'profile-orders',
        meta: {
          requiresAuth: true,
          background: 'waves'
        },
        component: resolve('~/components/pages/profilePage/orders/Orders')
      }, {
        path: '/profile/favorites',
        name: 'profile-favorites',
        meta: {
          requiresAuth: true,
          background: 'waves'
        },
        component: resolve('~/components/pages/profilePage/favorites/Favorites')
      }]
    }, {
      path: '/successful-order',
      name: 'successful-order',
      component: resolve('~/components/pages/successfulOrderPage/SuccessfulOrderPage')
    }, {
      path: '/product/:id',
      name: 'product',
      meta: { background: 'waves' },
      component: resolve('~/components/pages/productPage/ProductPage')
    }, {
      path: '/privacy',
      name: 'privacy',
      component: resolve('~/components/pages/privacyPage/PrivacyPage')
    }, {
      path: '/reviews',
      name: 'reviews',
      component: resolve('~/components/pages/reviewsPage/ReviewsPage')
    }, {
      path: '/new-review',
      name: 'new-review',
      component: resolve('~/components/pages/newReviewPage/NewReviewPage')
    })
  }
}
