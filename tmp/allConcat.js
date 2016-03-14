var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();

    var title = $("#title").val();
    var entry = $("#entry").val();

    journalMain = new Journal(title, entry);
    var words = journalMain.wordCounter();

    $("#title-entry").append(title);
    $("#journal-entry").append(entry);
    $("#word-count").append(words);
  });
});
