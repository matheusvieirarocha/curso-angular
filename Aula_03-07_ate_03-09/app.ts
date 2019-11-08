//Codigos em EcmaScript 2015 nao precisam de ponto e virgula no final.
let message: string = "Help me, Obi-wan Kenobi. You're my only hope"
console.log(message)

let episode: number = 4
console.log("This is episode " + episode)
episode = episode + 1
console.log("Next episode is " + episode);

let favoritedroid: string
favoritedroid = "BB-8"
console.log("My favorite droid is " + favoritedroid)

let isEnoughToBeathMF = function(parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 11
console.log(`is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeathMF(distance) ? 'yes': 'no'}`)

let call
call = (name: string) => console.log(`Do you copy, ${name}`)
call("R2")

function inc (speed: number, inc: number = 1): number{
    return speed + inc
}

console.log(`inc(5, 1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)