const Papa = require('papaparse')

module.exports = ({ file }) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('not found file'))
      return
    }
    // Parse local CSV file
    Papa.parse(file, {
      header: true, // 第一行是否是標題
      dynamicTyping: true, // 自動轉換 Number 和 Boolean
      // escape: ', ',
      comments: '#', // 去除註解
      complete: (results) => {
        resolve(results)
      }
    })
  })
}
