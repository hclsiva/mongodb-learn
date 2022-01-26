const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving Records', function(){

it('Saving record to the database',function(){
    var myChars = new MarioChar({
        name:'Mario',
        weight:60
    });

    myChars.save().then(function(done){
        assert(myChars.isNew() == false);
        done();
    });
})
});