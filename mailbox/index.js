'use strict';

const Gmail = require('node-gmail-api');
const client = new Gmail(process.env.GMAIL_API_KEY);
const Readable = require('stream').Readable;

module.exports = Object.create(mailbox.prototype, {});

function mailbox() {}

mailbox.prototype.poll = function (seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError(`seconds argument should be a Number, passed ${typeof seconds}`);
  }

  const stream = new Readable;
  const clientOptions = {
    max: 10,
  };

  const inbox = client.messages('label:inbox', clientOptions);
  inbox.on('data', (data) => stream.push(data));

  return stream;
}
