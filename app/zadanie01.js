// 1. Którego hasła użyłem?
// Sprawdźmy Twoje umiejętności korzystania z funkcji skrótu.
// W pliku app/zadanie01.js znajduje się ciąg '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e'. Twoim zadaniem jest określenie którego z poniższych haseł użyłem do jego wygenerowania:
// '??TegoHasła'
// 'CodersLab'
// 'Node.js Szyfruje Pliki'
// 'Zaźółć Gęślą Jaźń'
// 'Moje Haslo 1@3!'
// '111#$((@)n'
// 'Dzisiaj Szyfruje 83'
// Nie wiadomo jaki został użyty algorytm funkcji skrótu. Zerknij do działu funkcji skrótu, aby przypomnieć sobie o jakich wspominaliśmy.
// Zadanie możesz wykonać ręcznie, możesz też spróbować wykonać go za pomocą pętli - aby program sam znalazł, które z powyższych haseł zwróci dla danej funkcji skrótu '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e'.

const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
let arrPwd = ['??TegoHasła','CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n','Dzisiaj Szyfruje 83'];
let arrAlg = ['sha256', 'sha512', 'md5', 'rmd160'];

(function checkSecret() {
  'use strict';
  for (let countAlg = 0; countAlg < arrAlg.length; countAlg++) {
    for (let countPwd = 0; countPwd < arrPwd.length; countPwd++) {
      let hash = crypto.createHmac(arrAlg[countAlg], arrPwd[countPwd])
                      .digest('hex');
      if (hash === MY_PWD_HASH) {
        console.log(`Znalazłem hash: ${hash}, który został utworzony na podstawie ${arrPwd[countPwd]} !`);
      } else
        console.log('To nie to!');
    }
  }
}());
