// defined arrays
let cardsFor = ["Lisa", "Kaitlin", "Jan"] 
let event = "surprise"

//created function
function writeCards(cardsFor, event){
    let newArray = []
    for (let i = 0; i < cardsFor.length; i++) {

    newArray.push(`Thank you, ${cardsFor[i]}, for the wonderful ${event} gift!`)
    
}

return newArray

}

//run function
writeCards(cardsFor)

debugger
let int = 10

function countDown(int){
    let i = 0
    while (i <= int) {
        console.log(int)
        int--
    }

    return int
}

countDown(int)

debugger
