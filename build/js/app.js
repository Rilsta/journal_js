(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').Card;

$(document).ready(function(){

   matchCard = "blankMatchCard";

$(".box1").click(function () {
  $(".box1").toggleClass("red");
    newCard = new Card("red");
    newCard.cardClicked();
    console.log(newCard);
    console.log(matchCard);
    if (newCard.matched === true)
    {
      $(".box3").css("background-color", "red")
      $(".box1").css("background-color", "red")

    }



});
$(".box2").click(function () {
  $(".box2").toggleClass("blue");
   newCard = new Card("blue");
  newCard.cardClicked();
  console.log(newCard);
  if (newCard.matched === true)
  {
    $(".box4").css("background-color", "blue")
    $(".box2").css("background-color", "blue")

  }

});
$(".box3").click(function () {
  $(".box3").toggleClass("red");
   newCard = new Card("red");
  newCard.cardClicked();
  if (newCard.matched === true)
  {
    $(".box3").css("background-color", "red")
    $(".box1").css("background-color", "red")

  }
  console.log(newCard);
  console.log(matchCard);


});
$(".box4").click(function () {
  $(".box4").toggleClass("blue");
   newCard = new Card("blue");
   var matchCard = " ";
  newCard.cardClicked();
  console.log(newCard);
  if (newCard.matched === true)
  {
    $(".box4").css("background-color", "blue")
    $(".box2").css("background-color", "blue")

  }




});



});

},{"./../js/card.js":1}]},{},[2]);
