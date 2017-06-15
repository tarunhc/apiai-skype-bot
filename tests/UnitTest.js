var assert = require('assert');
var helper = require('./../support files/helpers');
var intentactions = require('./../support files/intentactions');

describe('Helpers Test', function() {

    it('helper.getRandomInt', function () {
        assert.strictEqual(helper.getRandomInt(0, 0), 0);
        assert.ok(helper.getRandomInt(0, 3) < 4);
    })
})

describe('IntentActions Test', function () {

    it('intentactions.Greetings', function () {
        assert.notEqual(intentactions['Greetings'](), 'undefined');
        assert.strictEqual(typeof intentactions['SomeValue'], 'undefined');
    })
})
