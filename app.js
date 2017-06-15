'use strict';

const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser');

const SkypeBot = require('./skypebot');
const SkypeBotConfig = require('./skypebotconfig');
const appjson = require('./app.json');


const REST_PORT = (process.env.PORT || 5000);

const botConfig = new SkypeBotConfig(
    appjson.env.APIAI_ACCESS_TOKEN.value,
    appjson.env.APIAI_LANG.value,
    appjson.env.APP_ID.value,
    appjson.env.APP_SECRET.value
);

const skypeBot = new SkypeBot(botConfig);

// console timestamps
require('console-stamp')(console, 'yyyy.mm.dd HH:MM:ss.l');

const app = express();
app.use(bodyParser.json());

app.post('/chat', skypeBot.botService.listen());
app.get('/', function(req,res)
{
    res.send("Welcome to FV Support")
})
app.listen(REST_PORT, function () {
    console.log('Rest service ready on port ' + REST_PORT);
});