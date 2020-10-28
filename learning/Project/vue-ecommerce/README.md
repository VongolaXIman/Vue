# vue-dashboard-record

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## CORS
在vue.config.js加入
```
devServer: {
    proxy: {
      // 若新增 Service 時要加入
      '^/(test1|test2)\/api': {
        target: 'https://wilsontest.com.tw/wilsonservice',
        changeOrigin: true
      }
    }
  }
```

## 串api方法
首先，我们要通过 npm/Yarn 或一个 CDN 链接安装 axios。
我们首先创建一个 data 里的 property 以最终放置信息，然后将会在 mounted 生命周期钩子中获取数据并赋值过去，以比特幣時價API為例:https://api.coindesk.com/v1/bpi/currentprice.json：  
```
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    // 加入 try catch 檢查 api 狀態，並最後解除loading動畫
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
  // 會得到 get api response
})
```
```
// 用迴圈取出所有對應幣種及幣值
<div id="app">
  <h1>Bitcoin Price Index</h1>
  <div
    v-for="currency in info"
    class="currency"
  >
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
  </div>
</div>
```
```
// 使用filter取值並四捨五入至小數點後2位
filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
```
## 解決非同步
```
// promises=換成call api
const promises = [
  new Promise(resolve => setTimeout(resolve, 0, 1)),
  new Promise(resolve => setTimeout(resolve, 0, 2))
];
Promise.all(promises)
  .then(data => {
    console.log("First handler", data);
    return data.map(entry => entry * 10);
  })
  .then(data => {
    console.log("Second handler", data);
  });
```
