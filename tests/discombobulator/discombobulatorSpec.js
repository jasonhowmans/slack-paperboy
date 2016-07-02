'use strict';

const test = require('tape');
const discombobulator = require('../../discombobulator');

test('discombobulator', (assert) => {
  assert.equal(typeof discombobulator, 'object',
    'should be an object');
  assert.end();
});
