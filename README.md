# huffin-generator

Vanitiy ed25519 public key generator using [huffin][0] representation.

## Output

```
$ ./bin/huffin -p hype
[========----------------------------------------------------] [2560000/19315482] [45.68%] [0d  0h  2m 17s] [145116 ops/sec]
{
  "secretKey": "5c9e6ddd82ea287508d3a0728bc625f0dace66db8b9cd8763b0f52d52ccde63e9c2e5cb5c7119e6f3cbe837950e74486863eb7c78ffcf9efc6315ac89924698c",
  "publicKey": "9c2e5cb5c7119e6f3cbe837950e74486863eb7c78ffcf9efc6315ac89924698c",
  "id": "@hype/AnC5ctccRnm88voN5UOdEhoY+t8eP/PnvxjFayJk"
}
```

## LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2017.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

### Credits

Big kudos to [sodium-native][1] from which I borrowed the most of the build
configuration.

[0]: https://github.com/indutny/huffin
[1]: https://github.com/sodium-friends/sodium-native
