'use strict';

const fs = require('fs');
const XmlReader = require('xml-reader');
const XmlQuery = require('xml-query');

fs.readFile('knowledgeBase.xml', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var parsedXml = XmlReader.parseSync(data);
    var xmlQuery = XmlQuery(parsedXml);

    var intentName = "Greetings";
    var inputContext = "A";
    var outputContext = "B";
    var results = [];

    xmlQuery.each(function(node) {
        if (node.name == 'Intents') {
            for (var intentNodeIndex = 0; intentNodeIndex < node.children.length; intentNodeIndex++) {
                var intentNode = node.children[intentNodeIndex];
                if (intentNode.attributes.name == intentName) {
                    var replyParentNodes = intentNode.children;
                    for (var replyParentNodeIndex = 0; replyParentNodeIndex < replyParentNodes.length; replyParentNodeIndex++) {
                        var replyParentNode = replyParentNodes[replyParentNodeIndex];
                        if (replyParentNode.attributes.inputContext.toString().includes(inputContext) && replyParentNode.attributes.outputContext.toString().includes(outputContext)) {
                            for (var replyNodesIndex = 0; replyNodesIndex < replyParentNode.children.length; replyNodesIndex++) {
                                if (replyParentNode.children[replyNodesIndex].children.length > 0 && replyParentNode.children[replyNodesIndex].children[0])
                                    results.push(replyParentNode.children[replyNodesIndex].children[0].value);
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
    });
});