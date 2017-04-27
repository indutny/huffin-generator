'use strict';

const assert = require('assert');
const id = require('huffin');
const Buffer = require('buffer').Buffer;

const binding = require('../');

describe('huffin-generator binding', () => {
  it('should generate', () => {
    const prefix = id.parsePrefix('hyper');
    const buffer = prefix.value.toBuffer();
    const bitLength = prefix.bitLength;

    let pair = null;
    for (;;) {
      const res = binding.generate(buffer, bitLength, 10000);
      if (res !== false) {
        pair = { secretKey: res, publicKey: res.slice(32) };
        break;
      }
    }

    assert(/hyper\//.test(id.stringify(pair.publicKey)));
  });
});
