function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function () {
  var words = this.body.split();
  return words.length;
};

Journal.prototype.letterCount = function (type) {
  var words = this.body.toLowerCase.split();
  var typeCount = [];
  var letters = [];
  words.forEach(function (word) {
    letters.concat(word.split(''));
  });
  letters.forEach(function (letter) {
    if (type === 'vowels' && letter === ('a' || 'e' || 'i' || 'o' || 'u')) {
      typeCount.push(letter);
    }
    else {
      typeCount.push(letter);
    }
  });
  return typeCount.length;
};

Journal.prototype.getTeaser = function () {
  var firstEight = [];
  var words = this.body.split();
  if (words.length <= 8)  {
    firstEight = words;
  }
  else {
    for (var i = 0; i <= 8; i++) {
      firstEight.push(words[i]);
    }
  }
  return firstEight.join(" ");
};

exports.journalModule = Journal;
