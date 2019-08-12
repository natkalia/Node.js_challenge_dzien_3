// Zadanie dnia 2: 4f9f...03c40
// Ostatnie zadanie polega na rozszyfrowaniu niżej podanego tekstu. Ten tekst znajduje się również w pliku app/zadanieDnia2.js. Użyto jednego z algorytmów szyfrujących które wymieniliśmy. Hasłem jest pierwsza i ostatnia litera każdego słowa w pierwszym zdaniu tego zadania :)
// 4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40

const crypto = require('crypto');
const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

const arrAlg = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];
const longText  = 'Pobawmy się jak komputerowy Detektyw';
let password = '';

function getPassword(x) {
  'use strict';
  x = x.split(' ');
  for (let i = 0; i < x.length; i++) {
    password += x[i].charAt(0) + x[i].charAt(x[i].length-1);
  }
}
getPassword(longText);
console.log(`Hasło to: ${password}`);

function decodeTxt(algorithm) {
  'use strict';
  const decipher = crypto.createDecipher(algorithm, password);
  let decrypted = decipher.update(ENCRYPTED_TEXT, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(`Użyty alogorytm to ${algorithm} a rezultat to: ${decrypted}`);
}

//To be solved: problem with error when iterating over algorithms array with a loop, when answer is wrong (when counter is 0 or 1)
for (let counter = 2; counter < arrAlg.length; counter++) {
  decodeTxt(arrAlg[counter]);
}