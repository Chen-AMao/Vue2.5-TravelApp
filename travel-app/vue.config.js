const mockdata = require('./static/mock/index.json');

module.exports = {
    //...
  devServer: {
    before(app) {
      app.get('/static/mock/index.json',(req,res)=>{
        res.json(mockdata);
      })
    },

    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/api' : '/static/mock'
          }
      }
    }

  }

};