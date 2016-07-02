'use strict';

// Global requires
const env = require('dotenv').config();
const test = require('tape');
const nock = require('nock');

// Test files
const mailbox = require('../../mailbox');


test('mailbox', (assert) => {
  assert.equal(typeof mailbox, 'object',
    'should be an object');
  assert.end();
});

test('mailbox.poll()', (assert) => {
  assert.throws(() => mailbox.poll(), /TypeError/,
    'should throw Error if used without an argument');

  assert.equal(typeof mailbox.poll(1).pipe, 'function',
    'should return a ReadStream');

  assert.end();
});
