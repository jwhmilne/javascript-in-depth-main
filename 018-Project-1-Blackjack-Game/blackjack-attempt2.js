// STEP 1. GENERATE A DECK:

const generateDeck = () => {
  // Set up card properties:
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
  // Create a place to put each card in:
  let deck = [];
  // Get every deck and array:
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < faces.length; x++) {
      // Create a card object with every suit and face:
      let card = {
        Face: faces[x],
        Suit: suits[i],
      };
      // Add the card objects to a new deck:
      deck.push(card);
    }
  }
  return deck;
};

const deck = generateDeck();

// STEP 2: DRAW A RANDOM CARD:

// Create hands
let playerHand = [];
let dealerHand = [];

const drawCard = (hand) => {
  // Store a random number from 1-52 (inclusive):
  const randomCardIndex = Math.floor(Math.random() * deck.length);
  // Use random number as an indices for random card in deck variable:
  const randomCard = deck[randomCardIndex];
  // Add the randomCard to the hand:
  hand.push(randomCard);
  // Remove the card from the deck:
  deck.splice(randomCardIndex, 1);
  // Return the hand:
  return hand;
};

// const checkScore = (hand) => {};

// const playerHand = [];
// const dealerHand = [];

// playerHand.push(drawCard(deck));
// dealerHand.push(drawCard(deck));

// console.log("Starting Player Hand: ", playerHand);
// console.log("Checking Player Score: ", checkScore(playerHand));
// console.log("Starting Dealer Hand: ", dealerHand);
// console.log("Checking Dealer Score: ", checkScore(dealerHand));
