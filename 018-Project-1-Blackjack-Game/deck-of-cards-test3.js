// STEP 1: CREATE A DECK

// Generate a whole deck with all suits and faces:
function generateDeck() {
  // Create card properties for deck:
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const faces = [
    "Ace",
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
  // Create a place to put each "card" in:
  let deck = new Array();
  // Get every suit and face:
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < faces.length; x++) {
      // Create a card object, to include every suit and face:
      let card = {
        Face: faces[x],
        Suit: suits[i],
      };
      // Add that created card object to the new deck array
      deck.push(card);
    }
  }
  // Return the deck with every variation of card
  return deck;
}

// Store the function that creates a deck into a variable:
const deck = generateDeck();
// Show the complete deck:
// console.log(deck);

// STEP 2: CREATE A FUNCTION TO DRAW A RANDOM CARD

// Create a function to draw a card (store in a variable):
const drawCard = function drawCard() {
  // Use js math function to generate a random "index"(integer) of the cards:
  let randomCardIndex = Math.floor(Math.random() * deck.length);
  // Create a randomCard variable of a random card using the random "index":
  let randomCard = deck[randomCardIndex];
  // Remove that card from the deck array:
  deck.splice(randomCardIndex, 1);
  // Return the removed randomCard:
  return randomCard;
};

console.log("Draw one:");
console.log(drawCard());
console.log(deck);
