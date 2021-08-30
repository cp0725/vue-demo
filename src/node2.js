const path = require('path')
const fs = require('fs')
const http = require('http')


if (!fs.existsSync('image')) {
  fs.mkdirSync('image', function (error) {
    if (error) {
      return false
    }
    console.log('创建目录成功')
  })
}

const qualificationUrl = 'http://p0.meituan.net/scarlett/e4ad88a24dc23a28d6212a3bd9e87e4267588.jpg'
let filepath = path.join(__dirname, './image/front.png')

let agentStream = fs.createWriteStream(filepath)

http.get(qualificationUrl, function (res) {
  res.pipe(agentStream)
})
console.log(filepath)