'use strict';
const Enum = require('enum');

module.exports = class helpers {

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static get intents() {
        return new Enum(
            [
                'Greetings',
                'Default Fallback Intent'
            ], { ignoreCase: true }
        );
    }

    static getIntentEnums() {
        return new Enum(
            [
                'Greetings',
                'Default Fallback Intent'
            ], { ignoreCase: true }
        );
    }
    static getEnumsData() {
        var obj = {
            'Greetings': function(intent) {
                return intent;
            }
        };
        return obj;
    }

}