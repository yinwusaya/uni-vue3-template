## 插件说明

> 这是 `v-tabs` 插件的升级版本，参数上有很大变动，支持 `H5` `小程序` `手机端`，如果是在之前的插件上升级的话，请注意参数的变更，触发的事件没有变更。

## 使用说明

### 1、最基本用法

- 视图文件

```html
<v-tabs v-model="current" :tabs="tabs" @change="changeTab"></v-tabs>
```

- 脚本文件

```js
export default {
  data() {
    return {
      current: 0,
      tabs: ['军事', '国内', '新闻新闻', '军事', '国内', '新闻', '军事', '国内', '新闻']
    }
  },
  methods: {
    changeTab(index) {
      console.log('当前选中的项：' + index)
    }
  }
}
```

### 2、平铺整个屏幕

- 视图文件

```html
<v-tabs v-model="activeTab" :scroll="false" :tabs="['全部', '进行中', '已完成']"></v-tabs>
```

- 脚本文件

```js
export default {
  data() {
    return {
      activeTab: 0
    }
  }
}
```

### 3、胶囊用法

- 视图文件

```html
<v-tabs v-model="current" :tabs="tabs" :pills="true" line-height="0" activeColor="#fff" @change="changeTab"></v-tabs>
```

- 脚本文件

```js
data() {
  return {
    current: 2,
    tabs: [
        '军事',
        '国内',
        '新闻新闻',
        '军事',
        '国内',
        '新闻',
        '军事',
        '国内',
        '新闻',
      ],
  },
  methods: {
    changeTab(index) {
      console.log('当前选中索引：' + index)
    }
  }
}
```

## 文档说明

### 1、属性说明

|       参数        |  类型   |  默认值   |                                   说明                                    |
| :---------------: | :-----: | :-------: | :-----------------------------------------------------------------------: |
|       tabs        |  Array  |    []     |                              控制 tab 的列表                              |
|       value       | Number  |     0     |                            必传(双向绑定的值)                             |
|       color       | String  |  '#333'   |                               默认文字颜色                                |
|    activeColor    | String  | '#2979ff' |                              选中文字的颜色                               |
|     fontSize      | String  |  '28rpx'  |                      默认文字大小(rpx 或 px)（弃用）                      |
|       bold        | Boolean |   true    |                              是否加粗选中项                               |
|      scroll       | Boolean |   true    |                      是否显示滚动条，平铺设置 false                       |
|      height       | String  |  '70rpx'  |                            tab 高度(rpx 或 px)                            |
|    lineHeight     | String  |  '10rpx'  |                            滑块高度(rpx 或 px)                            |
|     lineColor     | String  | '#2979ff' |                                滑块的颜色                                 |
|     lineScale     | Number  |    0.5    |                              滑块宽度缩放值                               |
|    lineRadius     | String  |  '10rpx'  |                          滑块圆角宽度(rpx 或 px)                          |
|       pills       | Boolean |   false   |                               是否开启胶囊                                |
|    pillsColor     | String  | '#2979ff' |                          胶囊背景颜色(rpx 或 px)                          |
| pillsBorderRadius | String  |  '10rpx'  |                          胶囊圆角宽度(rpx 或 px)                          |
|       field       | String  |    ''     |                 如果 tabs 子项是对象，输入需要展示的键名                  |
|      bgColor      | String  |  '#fff'   |                     背景色，支持 linear-gradient 渐变                     |
|      padding      | String  |    '0'    |                           整个 tab padding 属性                           |
|       fixed       | Boolean |   false   |                              是否固定在顶部                               |
|    paddingItem    | String  | '0 22rpx' |                选项的边距（设置上下不生效，需要设置高度）                 |
|   lineAnimation   | Boolean |   true    | 是否需要 line 和 pills 的动画，在隐藏页面后默认移动到第一个的时候比较实用 |
|      zIndex       | Number  |   1993    |                         控制 tab 的层级，默认1993                         |

### 1.1 `tabs`参数展开说明

#### 1.1.1 当`tabs`仅仅是单纯的数组时候，没有什么特别的地方

```js
export default {
  data() {
    return {
      tabs: ['全部', '待付款', '待消费', '已完成', '已评价', '已过期', '已退款']
    }
  }
}
```

#### 1.1.2 当`tabs`使用的数组对象的方式，特定参数需要注意一下

- `disabled` 参数，可以控制按钮是否可以点击

```js
export default {
  data() {
    return {
      tabs: [
        { id: 1, name: '待付款', disabled: false },
        { id: 2, name: '待收货', disabled: false },
        { id: 3, name: '待评价', disabled: false },
        { id: 4, name: '退款/售后', disabled: true },
        { id: 5, name: '我的订单', disabled: false }
      ]
    }
  }
}
```

### 2、事件说明

|  名称  | 参数  |                说明                |
| :----: | :---: | :--------------------------------: |
| change | index | 改变选中项触发, index 选中项的下标 |

## 更新日志
## 
### 2.2.1（2024-11-13）
1. [修复]修复摇树打包出现的bug

### 2.2.0（2024-07-19）
1. [修改]增加节流函数，控制tab的点击间隔

### 2.1.9（2024-06-14）
1. [修改]当`current`初始值大于`tabs.length`或者小于`0`，自动设置`current`的值为`0`
2. [抛弃]压缩包方式的源码不提供维护了，只维护`uni_modules`中的源码

### 2.1.8（2024-06-06）
1. [新增]支持`vue3`了

### 2.1.6（2024-06-06）
1. [修复]使用`fixed`属性之后，在支付宝小程序无法滚动的bug

### 2.1.5（2023-11-02）
1. [修复]修复`change`和`v-model`绑定的值不同步
2. [修复]暂时停用`activeFontSize`选项
3. [修改]修改默认激活的文字不加粗

### 2.1.4（2023-10-12）
1. [修改]修改计算方式
2. [新增]外部可以通过`this.$refs.tabs.update()`方法主动更新

### 2.1.3（2023-09-11）
1. [新增]支持自定义插槽模式，具体可以查看示例代码使用方式。[gitee demo](https://github.com/xfjpeter/uni-plugins/blob/master/pages/tabs/tabs.vue#L47-L50) 或 [github demo](https://github.com/xfjpeter/uni-plugins/blob/master/pages/tabs/tabs.vue#L47-L50)

### 2.1.2（2023-06-12）
1. [新增]添加`z-index`参数控制层级大小，默认1993
2. [说明]以后该插件只更新`uni_modules`方式的，`zip`方式的不提供更新了，如果需要的请到 [gitee uni-plugins](https://gitee.com/xfjpeter/uni-plugins) 或 [github uni-plugins](https://github.com/xfjpeter/uni-plugins)下载源码，自行使用

### 2.1.1（2022-09-16）

1. 将插件更新为`uni_modules`方式

### 2022-08-12

1. 增加`disable`参数，控制是否可以点击，只能应用在数组对象中，见[disabled 的用法](#112-当tabs使用的数组对象的方式特定参数需要注意一下)

```js
export default {
  data() {
    return {
      tabs: [{ id: 1, name: '' }]
    }
  }
}
```

### 2022-01-27

1. 更新属性`line-animation`设置为`false`可以不要动画，这是好多朋友问到，特此加上

### 2020-09-24

1. 修复 `v-tabs` 第一次可能出现第一个标签显示不完整的情况
2. 修改了 `pages/tabs/order` 示例文件

### 2020-09-21

1. 修复添加 `fixed` 属性后，滚动条无效
2. 修复选项很少的情况下，下划线计算计算错误
3. 新增 `paddingItem` 属性，设置选项左右边距（上下边距需要设置 `height` 属性，或者设置 `padding` 属性）

**写在最后：**
欢迎各位老铁反馈 bug ，本人后端 PHP 一枚，只是应为感兴趣前端，自己琢磨，自己搞。如果你在使用的过程中有什么不合理，需要优化的，都可以在下面评论（或加我 QQ: 1207791534），本人看见后回复、修正，感谢。

### 2020-09-17

1. 紧急修复 bug，横向滑动不了的情况

### 2020-09-16

1. 新增 `fixed` 属性，是否固定在顶部，示例地址：`pages/tabs/tabs-static`
2. 优化之前的页面结构

**注意：**

1. 使用 `padding` 属性的时候，尽量不要左右边距，会导致下划线位置不对
2. 如果不绑定 `v-model` 会导致 `change` 事件改变的时候，下划线不跟随问题

### 2020-09-09

1. 修复 `width` 错误，dom 加载的时候没有及时获取到 `data` 属性导致的。

### 2020-08-29

1. 优化异步改变 `tabs` 后，下划线不初始化问题
2. `github` 地址上有图 2 的源码，需要的自行下载，页面路径：`pages/tabs/order`

### 2020-08-20

1. 优化 `节点查询` 和 `选中渲染`
2. 优化支付宝中 `createSelectorQuery()` 的影响

### 2020-08-19

1. 优化 `change` 事件触发机制

### 2020-08-16

1. 修改默认高度为 `70rpx`
2. 新增属性 `bgColor`，可设置背景颜色，默认 `#fff`
3. 新增整个 `tab` 的 `padding` 属性，默认 `0`

### 2020-08-13

1. 全新的 `v-tabs 2.0`
2. 支持 `H5` `小程序` `APP`
3. 属性高度可配置

## 预览

![v-tabs 2.0.1.gif](https://tva1.sinaimg.cn/large/007S8ZIlgy1ghsv40mj76g30ai0i2tsd.gif)
![v-tabs 2.0.2.gif](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/42f3a920-a674-11ea-8a24-ffee00625e2e_1.png?v=1597912963)
