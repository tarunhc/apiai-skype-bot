'use strict';

const fs = require('fs');
const XmlReader = require('xml-reader');
const XmlQuery = require('xml-query');
const helpers = require('./support files/helpers');
const appjson = require('./app.json');

var xmlHandler = {

    'ReadRepliesFromIntents': function(intentName, context) {
        let inputContext = "";
        let outputContext = "";
        if (!(context === undefined)) {
            if (context.length == 1) {
                outputContext = context[0].name;
            } else if (context.length == 2) {
                inputContext = context[0].name;
                outputContext = context[1].name;
            }
        }

        return new Promise(function(resolve, reject) {
            fs.readFile(appjson.env.KNOWLEDGEBASE_PATH.value, appjson.env.ENCODING.value, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    var results = [];
                    var randomInt;
                    var parsedXml = XmlReader.parseSync(data);
                    var xmlQuery = XmlQuery(parsedXml);

                    xmlQuery.each(function(node) {
                        if (node.name == 'Intents') {
                            for (var intentNodeIndex = 0; intentNodeIndex < node.children.length; intentNodeIndex++) {
                                var intentNode = node.children[intentNodeIndex];
                                if (intentNode.attributes.name == intentName) {
                                    var replyParentNodes = intentNode.children;
                                    for (var replyParentNodeIndex = 0; replyParentNodeIndex < replyParentNodes.length; replyParentNodeIndex++) {
                                        var replyParentNode = replyParentNodes[replyParentNodeIndex];
                                        if (replyParentNode.attributes.inputContext.toString().toLowerCase().includes(inputContext) && replyParentNode.attributes.outputContext.toString().toLowerCase().includes(outputContext)) {
                                            for (var replyNodesIndex = 0; replyNodesIndex < replyParentNode.children.length; replyNodesIndex++) {
                                                if (replyParentNode.children[replyNodesIndex].children.length > 0 && replyParentNode.children[replyNodesIndex].children[0])
                                                    results.push(replyParentNode.children[replyNodesIndex].children[0].value);
                                            }
                                            break;
                                        }
                                    }
                                    if (results.length > 0) {
                                        randomInt = helpers.getRandomInt(0, results.length);
                                        break;
                                    }
                                }
                            }
                        }
                    });
                    resolve(results[randomInt]);
                }
            });
        });
    }
}

module.exports = xmlHandler;