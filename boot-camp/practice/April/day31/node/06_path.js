const path = require('path');

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));
console.log(path.extname(__filename));
// console.log(path.extname('index.html'));

// index.htmlx
// const filename = 'index.html'
// console.log(filename.substring(filename.indexOf('.')))

console.log(path.parse('/home/usr/dir/file.txt'));
