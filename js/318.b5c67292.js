(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1008:function(n,m){n.exports="### 题目\n\n给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。\n\n说明:\n\n* 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。\n* 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。\n\n示例:\n\n```js\n输入:\nnums1 = [1,2,3,0,0,0], m = 3\nnums2 = [2,5,6],       n = 3\n\n输出: [1,2,2,3,5,6]\n```\n\n### 解题\n\n解法一: 运用 JavaScript 提供的 sort 函数来排序函数。时间复杂度 O(nLogn)\n\n```js\n/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function (nums1, m, nums2, n) {\n  const length = nums1.length\n  for (let i = 0; i < length - m; i++) {\n    nums1.pop()\n  }\n  for (let i = 0; i < n; i++) {\n    nums1.push(nums2[i])\n    nums1.sort((a, b) => a - b)\n  }\n}\n```\n\n解法二: 题目的本质是归并排序的合部分。所以使用归并排序的思想即可解决。事件复杂度 O(n)\n\n```js\n/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function(nums1, m, nums2, n) {\n  let l = 0 // 第一个数组下标\n  let r = 0 // 第二个数组下标\n  const arr = []\n\n  while (l < m && r < n) {\n    if (nums1[l] <= nums2[r]) {\n      arr.push(nums1[l])\n      l++\n    } else if (nums1[l] > nums2[r]) {\n      arr.push(nums2[r])\n      r++\n    }\n  }\n\n  while (l < m) {\n    arr.push(nums1[l])\n    l++\n  }\n\n  while (r < n) {\n    arr.push(nums2[r])\n    r++\n  }\n\n  for (let i = 0; i < m + n; i++) {\n    nums1[i] = arr[i]\n  }\n}\n```\n\n### todo\n\n因为解法二多用了一个数组空间, 后续看看怎么优化。"}}]);