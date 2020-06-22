const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
   publicPath:"./",
   // 暂时关闭tsLint
   lintOnSave:false,
   transpileDependencies:[
      'vuex-module-decorators'
   ],
   chainWebpack: config => {
       config
         .plugin('html')
         .tap(args => {
           args[0].title= '心衰随访-智慧医疗-中昊慧达'
           return args
         })
    }
}