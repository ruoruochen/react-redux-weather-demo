# 使用`redux`开发一个天气预报

重点解决问题：

1. 获取用户当前定位并拿到天气信息。
   百度地图、高德地图都提供了 `Web Api` 去获取当前定位和天气，所以随便使用一个即可。

开发思路：

1. 组件层级：
2. 数据管理：数据动态联动，多个组件共享状态。

## `redux`的`store`、`reducer`设计

**`store`数据格式**

```js
const cityData = {
    cityName:'xxx',
    weatherList:[{
        date:'2.12',
        windLevel:3,
        windDirection:'东',
        wetPercent:'43%',
        temperatureMin:12,
        temperatureMax:25,
        weatherStatus:'中雪',
    },]
}

const cityList = {
    ...
}

```

**reducer**
action：

1. 切换城市，{type:changeCity,payload:'北京'}
