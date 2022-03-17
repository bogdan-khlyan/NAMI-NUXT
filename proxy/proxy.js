const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express()


// app.use('/ws', createProxyMiddleware({target: 'https://namisushi.dn.ua', changeOrigin: true, ws: true}))
// app.use('/api', createProxyMiddleware({target: 'https://namisushi.dn.ua', changeOrigin: true}))
// app.use('/image', createProxyMiddleware({target: 'https://namisushi.dn.ua', changeOrigin: true}))

// app.use('/ws', createProxyMiddleware({target: 'https://dev.namisushi.dn.ua', changeOrigin: true, ws: true}))
// app.use('/api', createProxyMiddleware({target: 'https://dev.namisushi.dn.ua', changeOrigin: true}))
// app.use('/image', createProxyMiddleware({target: 'https://dev.namisushi.dn.ua', changeOrigin: true}))
//
// app.use('/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true}))


app.use('/api', createProxyMiddleware({target: 'https://nami.devserver.host', changeOrigin: true}))
app.use('/image', createProxyMiddleware({target: 'https://nami.devserver.host', changeOrigin: true}))

app.use('/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true}))


app.listen(8000, () => void console.log('start'))
