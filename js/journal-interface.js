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
