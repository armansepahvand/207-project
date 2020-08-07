// Created by Crystal
var quotes = [
  "This is the journey of your life. Don\’t try to explain it to others because only you can see it.  – Nitin Namdeo",
"Some journeys can be only traveled alone.  – Ken Poirot",
"Smile for life, not only for the photo",
"Loving life is easy when you are abroad. Where no one knows you and you hold your life in your hands all alone, you are more master of yourself than at any other time.  – Hannah Arendt",
"I am never happier than when I am alone in a foreign city; it is as if I had become invisible.  – Storm Jameson",
"A nomad I will remain for life, in love with distant and uncharted places. – Isabelle Eberhardt",
"I am not the same, having seen the moon shine on the other side of the world.  – Mary Anne Radmacher",
"The journey of life is amazingly beautiful if you take it as a fearless adventure.  – Debasish Mridha",
"If you make friends with yourself you will never be alone.  – Maxwell Maltz",
"The man who goes alone can start today; but he who travels with another must wait till that other is ready.  – Henry David Thoreau",
"There are some places in life where you can only go alone. Embrace the beauty of your solo journey.  – Mandy Hale",
"You are the one that possesses the keys to your being. You carry the passport to your own happiness. – Diane Von Furstenberg",

]

function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}