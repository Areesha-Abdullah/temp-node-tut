const path = require('path')

// path seaparator of this platform 
console.log(path.sep)


// to join paths of diff files 
const filepath = path.join('/content/', 'subfolder','test.txt')
console.log(filepath)

// to get the base name the last file name the one the would be open if we would check the file url
console.log(path.basename(filepath))

// to get absolute path
const absolute_path= path.resolve(__dirname, 'content', 'subfolder' , 'test.txt')
console.log(absolute_path)
