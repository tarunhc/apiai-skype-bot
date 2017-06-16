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

    static get loginIssueFV() {
        return [
            'Can I know to which organization you are trying to login into Field Vantage?'
        ];
    }

    static get orgName() {
        return [
            'Thank you,Can I know are you using Google Chrome as the web browser?'
        ];
    }

    static get usingChrome() {
        return [
            'Thank you,Can I know What is the error message you are getting while trying to access the link?'
        ];
    }

    static get notUsingChrome() {
        return [
            'Can you please try using chrome to access Field Vantage URL and let me know if it resolves the issue?'
        ];
    }

    static get issueResolvedUsingChrome() {
        return [
            'Please always use Chrome as that is the support Browser for Field Vantage Application , Is there anything else i can assist you with today ?'
        ];
    }
    static get gatewayTimeout() {
        return [
            'Can I please have the URL which you are trying to access for Field Vantage Application?'
        ];
    }

    static get oldFVUrl() {
        return [
            'Please try using this link ge.fv.geoilandgas.com and let me know the outcome'
        ];
    }

    static get issueResolvedwithNewUrl() {
        return [
            'Please do not use the old URL which is ge.fieldvantage.geoilandgas.com as it does not exist anymore, hence you were getting that error , going forward please use only ge.fv.geoilandgas.com which is the correct URL.If you would like you can bookmark this URL in your browser,Shall I assist you with the steps to bookmark it?'
        ];
    }

     static get noBookmarkHelpNeeded() {
        return [
            'Is there anything else i can assist you with today ?'
        ];
    }
    static get noMoreHelpNeeded() {
        return [
            'Thank you for contacting the GE OIL & GAS Field Vantage Support , Have a Pleasant Day Ahead.'
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