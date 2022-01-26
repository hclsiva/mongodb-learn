const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting Records', function(){
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
    it('Deleting record from the database',function(done){
        MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null)
                done();
            })
        })
    })
});
