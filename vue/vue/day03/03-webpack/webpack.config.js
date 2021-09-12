const path = require('path');


module.exports = {

    entry: './js/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }

}