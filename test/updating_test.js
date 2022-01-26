const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating Records', function(){
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
    it('Update record in the database',function(done){
        MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
            MarioChar.findOne({name:'Luigi'}).then(function(result){
                assert(result.name === 'Luigi')
                done();
            })
        })
    })
    it('Increments the weight by 1',function(done){
        MarioChar.updateMany({},{$inc:{weight:1}}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result.weight === 61)
                done()
            })
        })
    })
});