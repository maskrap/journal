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
    $('#solution').append("<h2>" + title + "</h2>");
    $('#solution').append("<p>" + wordCount + "</p>");
    $('#solution').append("<p>" + vowelCount + "</p>");
    $('#solution').append("<p>" + consonantCount + "</p>");
    $('#solution').append("<p>" + preview + "</p>");
  });
});
