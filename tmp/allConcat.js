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

var apiKey = "a0e0535285a4f7419b54bd8bd1c160ea";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
