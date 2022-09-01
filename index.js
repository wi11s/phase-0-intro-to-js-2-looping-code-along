// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(arrayOfNames, eventName) {
    let arrayOfMessages = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        arrayOfMessages[i] = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`
    }
    return arrayOfMessages
}

const countDown = (number) => {
    while (number >=0) {
        console.log(number)
        --number
    }
}
