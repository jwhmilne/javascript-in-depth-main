// STEP 1. GENERATE A DECK
const generateDeck = () => {
  // Set up card properties
  const faces = [
    "Ace",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  // Create a place to put each card in
  let deck = new Array();
  // Get every deck and array
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < faces.length; x++) {
      // Create a card object with every suit and face
      let card = {
        Face: faces[x],
        Suit: suits[i],
      };
      // Add the card objects to a new deck
      deck.push(card);
    }
  }
  return deck;
};

// Store generateDeck() into a variable
let deck = generateDeck();

// Log the deck out
console.log(deck); // it works!

// const drawCard = (hand) => {};

// const checkScore = (hand) => {};

// const deck = generateDeck();
// const playerHand = [];
// const dealerHand = [];

// playerHand.push(drawCard(deck));
// dealerHand.push(drawCard(deck));

// console.log("Starting Player Hand: ", playerHand);
// console.log("Checking Player Score: ", checkScore(playerHand));
// console.log("Starting Dealer Hand: ", dealerHand);
// console.log("Checking Dealer Score: ", checkScore(dealerHand));
