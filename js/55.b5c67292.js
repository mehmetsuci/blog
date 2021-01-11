(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{745:function(n,t){n.exports="### 移动端数据图表组件调研\n\n* chart.js\n  * 文档: [chartjs](https://github.com/chartjs/Chart.js)\n  * github 48000+ star\n  * 类型：6 种图表类型（折线图，条形图，雷达图，饼图，柱状图和极地区域区）\n  * 特性：颜色，字体，边框和它们的尺寸都可以定制，图表可以动画的形式加载，非常炫\n  * 兼容：支持 canvas 的所有现代浏览器和大部分手机浏览器，自动针对 retina 屏幕做缩放\n  * 其他：图表如果使用动画效果，在 PC 端流畅，但是在移动端效果产生抖动延迟现象；如果不使用动画效果在移动端则正常显示\n  * 分析：移动端表现佳，课通过自适应宽度来使得图表宽度与设备屏幕适配。适当缩小图表，合理展示数据。兼容能力强，API 使用不复杂。\n* highcharts\n  * 文档: [hcharts](https://github.com/highcharts/highcharts)\n  * 技术: 基于 SVG\n  * 类型：直线图、曲线图、面积图、柱状图、饼图、散点图等多达 18 种不同类型的图表\n  * 其他：支持移动端，根据页面宽度定义图表宽度。需要商业授权\n* F2\n  * 文档: [F2](https://github.com/antvis/f2/)\n\n* 需要支持饼图、折线图\n\n比较当前社区图表库下来, 在移动端表现可以的有 chart.js(移动端展现 ok, 貌似有动画的场景表现欠佳)、hightcharts(需商用授权)、F2(图形语法上手成本高), 因为现在业务是基于 f2(https://f2.antv.vision/zh/examples/basic) 开发的, 因此现在的思路是封装 F2 为 React 组件, 类似社区的 [bizGoblin](https://bizcharts.net/products/bizGoblin/api/chart), [https://github.com/ant-design/ant-design-mobile-chart](https://github.com/ant-design/ant-design-mobile-chart)。\n\n### link\n\n* [antv f2](https://f2.antv.vision/zh/examples/candlestick/basic)\n* [ant design pro](https://v2-pro.ant.design/components/charts-cn)\n* [Biz Charts](https://bizcharts.net/product/bizcharts/category/7/page/12): to read\n\n### line chart\n\n|        shape 类型        |       解释       |\n| :----------------------: | :--------------: |\n|          'line'          |       折线       |\n|         'smooth'         |     平滑曲线     |\n|          'dot'           |       点线       |\n|          'dash'          |       虚线       |\n|          'dash'          |       虚线       |\n| 'hv', 'vh', 'hvh', 'vhv' | 信号相关的折线图 |\n\n> h means horizontal, v means vertical\n\n### 选择 Canvas 还是 SVG\n\n* [选择 Canvas 还是 SVG](https://www.yuque.com/antv/g2-docs/tutorial-renderers)\n\n\n- [ ] [antv 语雀](https://www.yuque.com/antv)"}}]);