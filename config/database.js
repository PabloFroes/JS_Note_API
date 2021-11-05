const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote')
    .then(() => console.log('MongoDB Connection Successful '))
    .catch((error) => console.log(error))