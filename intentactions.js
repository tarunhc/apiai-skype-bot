'use strict'
const replies = require('./replies');
const helpers = require('./helpers');


var intentactions = {

    //User created intents
    'Greetings': function () {
        var randomInt = helpers.getRandomInt(0, replies.salutations.length);
        return replies.salutations[randomInt];
    },

    'Default Fallback Intent': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'HelpNeeded': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'BotScope': function () {
        var randomInt = helpers.getRandomInt(0, replies.botScopeResponses.length);
        return replies.botScopeResponses[randomInt];
    },

    'ChatEnd': function () {
        var randomInt = helpers.getRandomInt(0, replies.chatEndResponses.length);
        return replies.chatEndResponses[randomInt];
    },


    //built in Intents
    'support.about': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'support.about.app_name': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'support.contacts.website': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'support.creators': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },

    'support.feedback': function () {
        return 'Sorry I could not get you! Type "help" to see some examples you can ask me.';
    },
};

module.exports = intentactions;