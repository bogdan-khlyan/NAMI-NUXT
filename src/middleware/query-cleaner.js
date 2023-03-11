export default async function ({ redirect, route }) {
  if (process.server) {
    const keys = Object.keys(route.query)
    if (keys.length) {
      redirect({
        path: route.path
      })
    }
  }
}
