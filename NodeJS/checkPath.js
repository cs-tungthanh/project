const path = require('path')

// const param1 = path.join(__dirname, 'parent');
const rootPath = path.join(__dirname, 'root');
const param = '/parent'
const output = '../parent';

console.log('param1', rootPath)
console.log('param2', param)
console.log('output', output)
console.log(path.relative(rootPath, param));

console.log(path.join(__dirname, './../'));