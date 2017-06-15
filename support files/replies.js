'use strict';

module.exports = class replies {

    static get salutations() {
        return [
            'Hello! How can I help you?',
            'Hi! How can I be of your help',
            'Hello! Need Assistance?',
            'Hi! Welcome',
            'Hi! Nice to have have you here!',
            'Welcome! How can I help you?'
        ];
    }

    static get chatEndResponses() {
        return [
            'You are welcome',
            'Welcome',
            'It was nice having you here',
            'Welcome! I hope I was helpful',
            'Great to have you here! Have a Nice Day!',
            'You are welcome, Have a good time',
            'You are welcome, hope you have a good experience with GE :)'
        ];
    }

    static get botScopeResponses() {
        return [
            "I can help you with two of the GEOG's product: Field-Vantage and Solutions.",
            "I can help you with two of the GEOG's product: Field-Vantage and Solutions. For which I can help you with?",
            "I have support for Field Vantage and Solutions",
            "I support FV and Solutions",
            "Field Vantage and Solutions",
            "FV and Solutions"
        ];
    }

}