(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{974:function(n,t){n.exports="### 417. Pacific Atlantic Water Flow\n\nGiven an `m x n` matrix of non-negative integers representing the height of each unit cell in a continent, `the \"Pacific ocean\" touches the left and top edges of the matrix` and `the \"Atlantic ocean\" touches the right and bottom edges`.\n\nWater can only flow in four directions (up, down, left, or right) `from a cell to another one with height equal or lower`.\n\nFind the list of grid coordinates `where water can flow to both the Pacific and Atlantic ocean`.\n\nNote:\n* The order of returned grid coordinates does not matter.\n* Both m and n are less than 150.\n\nExample 1:\n\n```js\nGiven the following 5 x 5 matrix:\n\nvar test = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]\n\n  Pacific ~   ~   ~   ~   ~\n       ~  1   2   2   3  (5) *\n       ~  3   2   3  (4) (4) *\n       ~  2   4  (5)  3   1  *\n       ~ (6) (7)  1   4   5  *\n       ~ (5)  1   1   2   4  *\n          *   *   *   *   * Atlantic\n\nReturn:\n\n[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).\n```\n\nExample 2:\n\n```js\nvar test = [[3, 3, 3], [3, 1, 3], [0, 2, 4]]\n\n  Pacific ~   ~   ~\n       ~  3   3   3  *\n       ~  3   1   3  *\n       ~  0   2   4  *\n          *   *   *  Atlantic\n```\n\n### Analyze\n\n* 有效出发点:\n  * 存在到 Pacific 的路径;\n  * 存在到 Atlantic 的路径;\n* 使用「染色算法」在比当前值小的方向递归找寻\n\n```js\n/**\n * @param {number[][]} matrix\n * @return {number[][]}\n */\nvar pacificAtlantic = function(matrix) {\n  const result = []\n  for (let m = 0; m < matrix.length; m++) {\n    for (let n = 0; n < matrix[m].length; n++) {\n      const usedPacific = []\n      const usedAtlantic = []\n      if (iterator(matrix, m, n, usedPacific, 'pacific')\n        && iterator(matrix, m, n, usedAtlantic, 'atlantic')) {\n        result.push([m, n])\n      }\n    }\n  }\n  return result\n};\n\nvar directions = [[1, 0], [0, 1], [-1, 0], [0, -1]] // bottom、right、top、left\n\nvar iterator = function(matrix, m, n, used, tag) {\n  used.push(`${m},${n}`)\n\n  // achieve the board of matrix\n  if (tag === 'pacific' ? ifReachPacific(m, n) : ifReachAtlantic(matrix, m, n)) {\n    return true\n  }\n\n  for (let i = 0; i < directions.length; i++) {\n    if (!isValid(matrix, m + directions[i][0], n + directions[i][1], used)) continue\n    const newPoint = matrix[m + directions[i][0]][n + directions[i][1]]\n    if (newPoint > matrix[m][n]) {\n      continue\n    }\n    const nextIsValid = iterator(matrix, m + directions[i][0], n + directions[i][1], used, tag)\n    if (nextIsValid) {\n      return true\n    }\n  }\n  return false\n}\n\n// judge if is valid\nvar isValid = (matrix, m, n, used) => {\n  if (used.indexOf(`${m},${n}`) > -1 || !(matrix[m] && typeof matrix[m][n] === 'number')) return false\n  return true\n}\n\nvar ifReachPacific = function(m, n) {\n  return m === 0 || n === 0\n}\n\nvar ifReachAtlantic = function(matrix, m, n) {\n  return m === matrix.length - 1 || n === matrix[0].length - 1\n}\n```\n\n### Similar Title\n\n130"}}]);