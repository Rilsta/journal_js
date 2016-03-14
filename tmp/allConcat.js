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
