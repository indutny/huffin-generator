const huffin = require('huffin');

const ITERATIONS = 10000;

const binding = require('../');

process.on('message', (config) => {
  const prefix = huffin.parsePrefix(config.prefix);
  const prefixBuf = prefix.value.toBuffer();
  const prefixBits = prefix.bitLength;

  let pair;
  for (;;) {
    process.send({
      type: 'status',
      payload: ITERATIONS
    });
    pair = binding.generate(prefixBuf, prefixBits, ITERATIONS);
    if (pair)
      break;
  }

  pair = {
    secretKey: pair,
    publicKey: pair.slice(32)
  };

  process.send({
    type: 'result',
    payload: {
      secretKey: pair.secretKey.toString('hex'),
      publicKey: pair.publicKey.toString('hex'),
      huffin: huffin.stringify(pair.publicKey, config.prefix.length)
    }
  });
});
