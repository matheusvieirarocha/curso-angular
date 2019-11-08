//Codigos em EcmaScript 2015 nao precisam de ponto e virgula no final.
var message = "Help me, Obi-wan Kenobi. You're my only hope";
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoritedroid;
favoritedroid = "BB-8";
console.log("My favorite droid is " + favoritedroid);
var isEnoughToBeathMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeathMF(distance) ? 'yes' : 'no'));
var call;
call = function (name) { return console.log("Do you copy, " + name); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
