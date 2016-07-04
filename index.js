'use strict';

const env = require('dotenv').config();
//const mailbox = require('./mailbox');
const config = require('./config.json');
const imap = require('./mailbox/imap');
const parser = require('./discombobulator');
const bot = require('./bot');

boot();

function boot() {
  imap.connect(config.newsletters[0]).then(function (success) {
    console.log(success);
  }, function (err) {
    console.error(err);
  });
  // mailbox
  //   .poll(10 /* In seconds */);

    // Api idea:
    // .pipe(parser.htmlToJson())
    // .pipe(parser.jsonToSlack())
    // .pipe(bot.post());
}
