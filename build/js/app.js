(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function() {
  var words = this.body.split(' ');
  return words.length;
};

Journal.prototype.letterCount = function(type) {
  var words = this.body.toLowerCase().split(' ');
  var typeCount = [];
  var letters = [];
  words.forEach(function(word) {
    letters = letters.concat(word.split(''));
  });
  letters.forEach(function(letter) {
    if (type === 'vowels' && letter === ('a' || 'e' || 'i' || 'o' || 'u')) {
      typeCount.push(letter);
    }
    else if (type === 'consonants' && letter !== ('a' || 'e' || 'i' || 'o' || 'u')) {
      typeCount.push(letter);
    }
  });
  return typeCount.length;
};

Journal.prototype.getTeaser = function() {
  var firstEight = [];
  var words = this.body.split(' ');
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

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var journal = new Journal(title, body);
    var wordCount = journal.wordCount();
    var vowelCount = journal.letterCount("vowels");
    var consonantCount = journal.letterCount("consonants");
    var preview = journal.getTeaser();
    var outputs = ['wordCount', 'vowelCount', 'consonantCount', 'preview']
    $('#solution').append("<h2>" + title + "</h2>");
    outputs.forEach(function(output) {
      eval("$('#solution').append('<p>' + " + output + " + '</p>')");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/journal.js":1}]},{},[2]);
