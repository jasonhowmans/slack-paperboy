'use strict';

const mailbox = require('./mailbox');
const parser = require('./discombobulator');
const bot = require('./bot');

boot();

function boot() {
  mailbox
    .poll(10 /* In seconds */)
    .pipe(parser.htmlToJson())
    .pipe(parser.jsonToSlack())
    .pipe(bot.post());
}
