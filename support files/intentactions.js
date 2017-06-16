'use strict'
const replies = require('./replies');
const helpers = require('./helpers');


var intentactions = {

    //User created intents
    'Greetings': function () {
        var randomInt = helpers.getRandomInt(0, replies.salutations.length);
        return replies.salutations[randomInt];
    },

    'Field Vantage Login Issue': function () {
        var randomInt = helpers.getRandomInt(0, replies.loginIssueFV.length);
        return replies.loginIssueFV[randomInt];
    },

     'Organization Name': function () {
        var randomInt = helpers.getRandomInt(0, replies.orgName.length);
        return replies.orgName[randomInt];
    },

    'Using Chrome': function () {
        var randomInt = helpers.getRandomInt(0, replies.usingChrome.length);
        return replies.usingChrome[randomInt];
    },

    'Not Using Chrome': function () {
        var randomInt = helpers.getRandomInt(0, replies.notUsingChrome.length);
        return replies.notUsingChrome[randomInt];
    },

     'Issue Resolved using Chrome': function () {
        var randomInt = helpers.getRandomInt(0, replies.issueResolvedUsingChrome.length);
        return replies.issueResolvedUsingChrome[randomInt];
    },

    'Gateway Time Out': function () {
        var randomInt = helpers.getRandomInt(0, replies.gatewayTimeout.length);
        return replies.gatewayTimeout[randomInt];
    },

    'Old FV Url': function () {
        var randomInt = helpers.getRandomInt(0, replies.oldFVUrl.length);
        return replies.oldFVUrl[randomInt];
    },

    'Issue Resolved Using New URL': function () {
        var randomInt = helpers.getRandomInt(0, replies.issueResolvedwithNewUrl.length);
        return replies.issueResolvedwithNewUrl[randomInt];
    },

    'No Bookmark Help Needed': function () {
        var randomInt = helpers.getRandomInt(0, replies.noMoreHelpNeeded.length);
        return replies.noMoreHelpNeeded[randomInt];
    },

     'No More Help Needed': function () {
        var randomInt = helpers.getRandomInt(0, replies.noMoreHelpNeeded.length);
        return replies.noMoreHelpNeeded[randomInt];
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