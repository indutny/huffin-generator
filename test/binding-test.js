'use strict';

const assert = require('assert');
const id = require('ed25519-id');
const Buffer = require('buffer').Buffer;

const binding = require('../');

describe('ed25519-id-binding', () => {
  it('should generate', () => {
    const prefix = Buffer.from('ok');
    let pair = null;
    for (;;) {
      const res = binding.generate(prefix, 10000);
      if (res !== false) {
        pair = { secretKey: res, publicKey: res.slice(32) };
        break;
      }
    }

    assert(/@ok\//.test(id.stringify(pair.publicKey)));
  });
});
