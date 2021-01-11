(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1010:function(n,e){n.exports="### title\n\nDetermine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.\n\nExample 1:\n\nInput: 121\nOutput: true\nExample 2:\n\nInput: -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\nExample 3:\n\nInput: 10\nOutput: false\nExplanation: Reads 01 from right to left. Therefore it is not a palindrome.\n\n### Analyze\n\n```js\n/**\n * @param {number} x\n * @return {boolean}\n */\nvar isPalindrome = function (x) {\n  const convert = x.toString().split('').reverse().join('')\n  if (x === Number(convert)) {\n    return true\n  } else {\n    return false\n  }\n};\n```"}}]);