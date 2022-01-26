const mongoose = require('mongoose');

before(function(done){
    mongoose.connect('mongodb://localhost:27017/orderManagerDB');
    mongoose.connection.once('open',function(){
        console.log('Connection has been made, now make the fireworks...');
        done();
    }).on('error',function(error){
        console.log('Connection error',error);
    })
})

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})