(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1018:function(n,i){n.exports="```js\n/** remind to clock */\n(function remindClock (arr) {\n  let print = ''\n  for (let i = 1; i < 21; i++) {\n    if (arr.indexOf(i) === -1) {\n      print += `@${i} `\n    }\n  }\n\n  if (print === '') return '齐了'\n  return `${print}记得打卡`\n})([])\n```"}}]);