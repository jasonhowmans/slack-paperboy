'use strict';

const env = require('dotenv').config();
const mailbox = require('./mailbox');
const parser = require('./discombobulator');
const bot = require('./bot');

boot();

function boot() {
  mailbox
    .poll(10 /* In seconds */);

    // Api idea:
    // .pipe(parser.htmlToJson())
    // .pipe(parser.jsonToSlack())
    // .pipe(bot.post());
}
