<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 12c18c8 (day2)

module.exports = ({

  // 在开发环境中是否每次都对代码进行eslint校验
  lintOnSave: false,
  publicPath: '/',
  // 配置跨域
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    // vue项目启动的时候自动打开浏览器
    open: true,
    proxy: {
      // '/api'就是代理的标识，就是告诉node，url前面是/api的那么就需要使用代理
      '/api': {
        target: 'http://testapi.xuexiluxian.cn/',
        // 是否跨域
        changeOrigin: true
      }
    }
  }
})
<<<<<<< HEAD
=======
=======
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,//关闭语法检查
  transpileDependencies: true,
  // 在开发环境中是否每次都对代码进行eslint校验
  lintOnSave: false,
  publicPath: '/',
  // 配置跨域
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    // vue项目启动的时候自动打开浏览器
    open: true,
    proxy: {
      // '/api'就是代理的标识，就是告诉node，url前面是/api的那么就需要使用代理
      '/api': {
        target: 'http://testapi.xuexiluxian.cn/',
        // 是否跨域
        changeOrigin: true
      }
    }
  }
})
>>>>>>> 5bc1ef4 (day2)
>>>>>>> 12c18c8 (day2)
