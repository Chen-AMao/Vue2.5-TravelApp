const mockdata_index = require('./static/mock/index.json');
const mockdata_city = require('./static/mock/city.json');
const mockdata_detail = require('./static/mock/detail.json');

module.exports = {
    //...
  devServer: {
    before(app) {
      app.get('/static/mock/index.json',(req,res)=>{
        res.json(mockdata_index);
      }),
      app.get('/static/mock/city.json',(req,res)=>{
        res.json(mockdata_city);
      }),
      app.get('/static/mock/detail.json',(req,res)=>{
        res.json(mockdata_detail);
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