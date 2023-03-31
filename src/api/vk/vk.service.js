export default () => ({
  async initVk() {
    const script = document.createElement('script')
    script.src = 'https://vk.com/js/api/openapi.js?169'
    script.type = 'text/javascript'
    const promise = new Promise(resolve => {
      script.onload = () => {
        resolve()
      }
    })
    document.head.appendChild(script)
    return await promise
  },
  initApp() {
    VK.init({
      apiId: process.env.NAMI_VK_ID,
      onlyWidgets: true
    })
    return VK
  }
})
