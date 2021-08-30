/*
 * @Author: 常培
 * @Date: 2021-07-18 12:18:14
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-14 15:31:06
 */

// require('@babel/register')({
//   plugins: ['@babel/plugin-transform-modules-commonjs']
// });

// let options = {};
// (async () => {
//   options = await import('./GConst.js');
//   console.log(options, 3)
// })();

// const a = require('./index.js')
// console.log(a)

module.exports = function({ types: babelTypes }) {
  return {
    visitor: {
      MemberExpression(path, state) { // 成员表达式
        if(path.get("object").node.name === 'GConst'){
          const key = path.toComputedKey(); // 这里返回结果为字符串字面量类型的节点
          const isString = babelTypes.isStringLiteral(key)
          if (isString) {

            const value = options.default.default[key.value]
            const newNode = babelTypes.valueToNode(value)
            path.replaceWith(newNode)
          }
        }
      },
    },
  };
};

