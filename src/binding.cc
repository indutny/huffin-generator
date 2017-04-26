#include <nan.h>

#include "sodium.h"
#include "ed25519.h"
#include "openssl/bn.h"

using namespace node;
using namespace v8;

// As per Libsodium install docs
#define SODIUM_STATIC

namespace huffin {

NAN_METHOD(Generate) {
  const char* prefix_data = Buffer::Data(info[0]);
  size_t prefix_len = Buffer::Length(info[0]);
  int prefix_bits = info[1]->IntegerValue();
  int iterations = info[2]->IntegerValue();

  ed25519_secret_key sk;
  ed25519_public_key pk;

  BIGNUM num;
  BIGNUM prefix;

  BN_init(&num);
  BN_init(&prefix);
  BN_bin2bn(reinterpret_cast<const unsigned char*>(prefix_data), prefix_len,
            &prefix);

  int i;
  for (i = 0; i < iterations; i++) {
    randombytes_buf(sk, sizeof(sk));
    ed25519_publickey(sk, pk);

    BN_bin2bn(pk, sizeof(pk), &num);
    BN_mask_bits(&num, prefix_bits);

    if (BN_ucmp(&num, &prefix) == 0)
      break;
  }

  if (i == iterations) {
    info.GetReturnValue().Set(Nan::False());
    return;
  }

  char out[sizeof(sk) + sizeof(pk)];
  memcpy(out, sk, sizeof(sk));
  memcpy(out + sizeof(sk), pk, sizeof(pk));

  info.GetReturnValue().Set(Nan::CopyBuffer(out, sizeof(out)).ToLocalChecked());
}


NAN_MODULE_INIT(Init) {
  if (sodium_init() == -1) {
    Nan::ThrowError("sodium_init() failed");
    return;
  }

  Nan::SetMethod(target, "generate", Generate);
}

}  // namespace huffin

NODE_MODULE(huffin, huffin::Init)
