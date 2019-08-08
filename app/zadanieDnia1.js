// Zadanie dnia 1: Narzędzie do sumy kontrolnej pliku
// Połącz swoją wiedzę z pierwszego, drugiego i dzisiejszego dnia. Stwórz program, któremu można przekazać jako argument ścieżkę pliku tekstowego. Następnie Twój program ma wczytać zawartość tego pliku i na końcu wykonać funkcję skrótu 'sha256' na nim i ją wyświetlić.
    // Przykładowo wykonanie:
    // node ./zadanieDnia1.js ./data/zadanieDnia1/testFile.txt
    // Powinno wyświetlić 4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca.
// Takie narzędzie jest bardzo praktyczne i powszechnie stosowane np. do sprawdzania oryginalności pobieranych plików (autor na swojej stronie pobierania musi podać oryginalny sha256, my po pobraniu generujemy swój i porównujemy czy są takie same).

const fs = require('fs');
const crypto = require('crypto');
let path = process.argv[2];

function controlSum(x) {
  let result = crypto.createHmac('sha256', x)
                     .digest('hex');
  console.log(result);

  // Zgodnie z treścią zadania powinno wyświetlić 4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca.
  // Wyświetla 38df8152cd3529ba1574962869b39264ffaf1f5960bd07c4dfafc1cd489ba1ea
  // Gdzie jest błąd?
}

fs.readFile(path, (err, data) => {
  if (err === null) {
    controlSum(data);
  } else {
    console.log('Error!');
  }
});
