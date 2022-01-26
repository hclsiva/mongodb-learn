const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding Records', function(){
    var myChars;
this.beforeEach(function(done){
     myChars = new MarioChar({
        name:'Mario',
        weight:60
    });

    myChars.save().then(function(){
        done();
    });
})
it('Finding one record from the database',function(){
    MarioChar.findOne({name:'Mario'}).then(function (result){
        assert(result.name === 'Mario');
        done()
    })
    
})
it('Finding one record using ID from the database',function(){
    MarioChar.findOne({_id:myChars._id}).then(function (result){
        assert(result._id.toString() === myChars._id.toString());
        done()
    })
    
})
});