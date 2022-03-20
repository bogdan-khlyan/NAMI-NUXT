export class NotificationsHelper {

  #store = null

  constructor(app) {
    this.#store = app.store
  }

  getNotifyOffsetTop() {
    let offset = 100
    if (this.#store.state.windowWidth < 1250) {
      offset = 80
    }
    if (this.#store.state.cart.isVisibleCart) {
      offset = 20
    }
    const notifies = document.getElementsByClassName('base-notify')
    for (let i = 0; i < notifies.length; ++i) {
      offset += notifies[i].offsetHeight + 10
    }
    return `${offset}px`
  }

  getNotifyOffsetRight() {
    if (this.#store.state.cart.isVisibleCart && this.#store.state.windowWidth >= 950) {
      return '620px'
    } else {
      return '20px'
    }
  }

  checkOffsetRight() {
    const notifies = document.getElementsByClassName('base-notify')
    let offset = 20
    if (this.#store.state.cart.isVisibleCart && this.#store.state.windowWidth >= 950) {
      offset = 620
    }
    for (let i = 0; i < notifies.length; ++i) {
      notifies[i].style.right = `${offset}px`
    }
  }

  checkOffsetTop() {
    const notifies = document.getElementsByClassName('base-notify')
    let offset = 100
    if (this.#store.state.cart.isVisibleCart) {
      offset = 20
    }
    for (let i = 0; i < notifies.length; ++i) {
      notifies[i].style.top = `${offset}px`
      offset += notifies[i].offsetHeight + 10
    }
  }

  success(options) {
    const notify = document.createElement('div')

    notify.style.opacity = '0'

    notify.style.top = this.getNotifyOffsetTop()
    notify.style.right = this.getNotifyOffsetRight()

    notify.innerHTML =
      '<div class="base-notify__icon">' +
        '<i class="el-notification__icon el-icon-success"></i>' +
      '</div>' +
      '<div class="base-notify__content">' +
        '<h3>' + options.title + '</h3>' +
        '<p>' + options.message + '</p>' +
      '</div>'
    notify.classList.add('base-notify')

    document.body
      .appendChild(notify)

    setTimeout(() => {
      notify.style.opacity = '1'
      notify.style.transform = 'translateX(0)'
      setTimeout(() => {
        notify.style.opacity = '0'
        notify.style.transform = 'translateX(-200px)'
        this.checkOffsetTop()
        setTimeout(() => {
          notify.remove()
        }, 200)
      }, 4000)
    }, 100)

  }

}

export default {}
