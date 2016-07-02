'use strict';

const Readable = require('stream').Readable;

module.exports = Object.create(mailbox.prototype, {});

function mailbox() {}

mailbox.prototype.poll = function (seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError(`seconds argument should be a Number, passed ${typeof seconds}`);
  }

  return new Readable;
}
