var wordCounter = require('./../js/wordCounter.js').wordCounter;

$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();

    var title = $("#title").val();
    var entry = $("#entry").val();

    var words = wordCounter(entry);

    $("#title-entry").append(title);
    $("#journal-entry").append(entry);
    $("#word-count").append(words);
  });
});
