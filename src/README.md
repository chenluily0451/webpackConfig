# 金控二代(Angular4 )


## 开发环境

1. 进入 src 目录后运行 npm install 
2. 运行 npm run dev 进入开发环境, 同时再运行 gulp watch 监控编译scss到css
3. 浏览器打开 http://localhost:4200/login 进行登陆
4. 静态文件放置在/ts
5. 目前dev-server处于iframe模式，在通知栏下使用iframe标签，配置详见webpack.dev.js
6. 前端公用组件文件在bs-common-module和bs-form-module，业务代码在admin-home-module里

## 生产环境

1. 进入 src 目录后运行 npm install, 然后运行 npm run build, 或 npm run build:prod, 或 运行angular4 静态编译版本 npm run build:aot
2. 浏览器打开 http://localhost:8080/web/login 进行登陆
