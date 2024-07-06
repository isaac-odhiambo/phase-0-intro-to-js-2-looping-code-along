function writeCards(namesArray) {
    let thankYouMessages = [];
    let name =[ 'Guadalupe', 'Ollie', 'Aki']
    for (let name of namesArray) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}