function Card (img) {
  this.img = img;
  this.matched = false;
}

var matchCard = "blank";

Card.prototype.cardClicked = function (){

  if (newCard.img === matchCard)
  {
    this.matched = true;
    return this.matched;

    // images stay showing
  } else {
    matchCard = newCard.img
    this.matched = false;
    return this.matched;
  }
};


// var cards = [];
//
// var img1 = ""
// var img2 = ""
// var img3 = ""
// var img4 = ""
// var img5 = ""
//
// var card1 = new Card(img1)
// var card2 = new Card(img2)
// var card3 = new Card(img3)
// var card4 = new Card(img4)
// var card5 = new Card(img5)


exports.Card = Card;
