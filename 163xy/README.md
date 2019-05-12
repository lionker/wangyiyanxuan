## project info
1)	此项目为仿网易严选Web App (SPA)
2)	包括商家, 商品, 购物车, 用户等多个子模块
3)	使用Vue全家桶+ES6+Webpack等前端最新最热的技术
4)	采用模块化、组件化、工程化的模式开发

## Usage tech
### 项目构建
1. webpack 
2. vue-cli
3. eslint

### vue全家桶
1. vue 基础框架
2. vuex 数据存储 
3. vue-router 单页路由

### css 预编译 scss
1. scss
2. scss-loader
3. node-sass 

### 第三方插件
1. mockjs 开发模拟数据交互
2. better-scroll 组价滑动库
3. swiper 轮播库
4. vee-validate 前端验证库
5. vue-lazyload 图片懒加载


## project Mainsteps
### 1. 分析需求, 技术可行性
### 2. 拆分路由 (先可只拆主要组件,后面页面内次组件可后面再续写)
### 3. 编写路由,和路由页框架并实现路由切换
  * 配置路由,连接路由页(router):
    - mode(boolean) : "hash" | "history" | "abstract"
    - meta : 路由元信息(当前路由,预设信息)
```
  {
    path: '/knowledge',
    component: Knowledge,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/knowledge/select',
        component: KnowSelect
      },
      {
        path: '/knowledge/find',
        component: KnowFind,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/knowledge/find'
      }
    ]
  }
```
  * 组件标签: 
    - <router-view> 渲染当前对应的路由组件
    - <router-link> 改变当前路由url
      * to(string | Location) : 值会传递router.push()
      * replace(boolean) : 值会传递给router.replace()
      * append(Boolean) : 设置 append 属性后，则在当前 (相对) 路径前添加基路径
      * tag(String) : <router-link> 渲染成某种标签，例如 <li>,同样它还是会监听点击，触发导航
### 4. 静态组件 (编写主要, 能力强就直接数据交互一起写咯)
### 5. 封装ajax , 封装 vuex, 封装 mockjs, 配置prory(跨域)
  * ajax 异步请求 
  * vuex 
  * mockjs 开发模拟数据
  * prory 代理请求
### 6. 请求数据 
  * mounted: 声明周期函数,模板已经初始化显示(即,初始化最后的阶段,仅调用一次)
    - 用于异步数据初始化发请求 (若在此初始化,滑屏或轮播插件,需要去注意相关数据节点是否真的存在)
  * computed: 监听数据的状态, 和 设置数据状态
  * watch: 变量变化(数据变化)
  * this.$nextTick: 若在mounted调用,DOM节点渲染结束后,即调用,但也要注意异步数据是否返回;
## npm run build --report
   查看各模块占用的大小,用于优化