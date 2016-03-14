function Journal (journalTitle, entry) {
  this.journalTitle = journalTitle;
  this.entry = entry;
  this.wordCount = this.wordCounter(entry);
  this.date = Date.now();
}

Journal.prototype.wordCounter = function() {
  var words = this.entry.split(' ');
  return words.length;
}

exports.Journal = Journal;
