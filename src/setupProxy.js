const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:5000/',
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }))
}
module.exports = function(app) {
  app.use(proxy('/.netlify/large-media/', {
    target: 'http://localhost:5000/',
    "pathRewrite": {
      "^/\\.netlify/large-media": ""
    }
  }))
}