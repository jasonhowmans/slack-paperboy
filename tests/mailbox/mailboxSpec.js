'use strict';

const test = require('tape');
const mailbox = require('../../mailbox');


test('mailbox', (assert) => {
  assert.equal(typeof mailbox, 'object',
    'should return object');
  assert.end();
});

test('mailbox.poll()', (assert) => {
  assert.throws(() => mailbox.poll(), /TypeError/,
    'should throw Error if used without an argument');

  assert.equal(typeof mailbox.poll(1).pipe, 'function',
    'should return a ReadStream');

  assert.end();
});
