const generateDeck = () => {};

const drawCard = (hand) => {};

const checkScore = (hand) => {};

const deck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

console.log("Starting Player Hand: ", playerHand);
console.log("Checking Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Checking Dealer Score: ", checkScore(dealerHand));
