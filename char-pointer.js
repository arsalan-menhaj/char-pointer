function letterPosition(string) {
  letterTable = {};

  string = string.toLowerCase();
  for ( i = 0 ; i < string.length ; i++ ) {
    if ( string.substring(i,i+1) !== ' ' ) {
    // Hops over whitespace in string,
    // but ensures whitespace still counts towards index

      if (!letterTable[string.substring(i,i+1)]) {
        letterTable[string.substring(i,i+1)] = String(i);
      } else {
        letterTable[string.substring(i,i+1)] += ', ' + String(i);
      }
    }
  }

  for (var key in letterTable) {
    console.log(key + ': ' + letterTable[key]);
  }
}

letterPosition("Lighthouse in the house");
