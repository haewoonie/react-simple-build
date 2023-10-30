### 自用 React 手脚架

开箱即用的 React 框架！基于 React+TS+Webpack

#### 框架

- React + Typescript + babel + less + Webpack
- axios
- zustand
- Ant Design

#### 使用

下载

```
git clone https://github.com/haewoonie/react-simple-build.git
```

安装依赖

```
npm install
```

启动

```
npm start
```

打包

```
npm run build
```

路由表入口（react-router-dom）

- /src/router/index.tsx
- 以组件方式引入，写入 path & element

全局 state 配置（zustand）

- /src/store
- 预配置：用户名/密码
- 持久化策略：sessionStorage

.env 环境变量配置

- 提供生产环境(.env.production)和开发环境(.env.development)两种环境配置
- webpack 配置
- 同时提供多.env 文件，修改`webpack.[ENV].config.ts`中`plugins:[DotenvWebpack]`的配置
- 更多内容参考 [dotenv 文档](https://github.com/motdotla/dotenv)

##### more to do

- canvas/iframe 导出/打印解决方案(pdf/html 模板/xlsx)
