export default () => ({
  sendEvent(event) {
    if (!process.env.NAMI_IS_DEV) {
      ym(90714880,'reachGoal',event)
    }
  }
})
