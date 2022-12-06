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

// // Show the complete deck:
// console.log(deck); // it works

// STEP 2: CREATE A FUNCTION TO DRAW A RANDOM CARD

// Create a function to draw a card:
function drawCard(deck) {
  // Use js math function to generate a random "index"(integer) of the cards:
  let randomCardIndex = Math.floor(Math.random() * deck.length);
  // Create a randomCard variable of a random card using the random "index":
  let randomCard = deck[randomCardIndex];
  // Remove that card from the deck array:
  deck.splice(randomCardIndex, 1);
  // Return the removed randomCard:
  return randomCard;
}

// Store the function to several newCard variables:
// const newCard1 = drawCard(deck);
// const newCard2 = drawCard(deck);
// const newCard3 = drawCard(deck);
// const newCard4 = drawCard(deck);
// const newCard5 = drawCard(deck);
// const newCard6 = drawCard(deck);
// const newCard7 = drawCard(deck);
// const newCard8 = drawCard(deck);
// const newCard9 = drawCard(deck);
// const newCard10 = drawCard(deck);

// STEP 3: CREATE A FUNCTION TO CHECK THE SCORE OF A HAND

// Create the checkScore function:
function checkScore(hand) {
  // Make all of the Ace face cards have a Score of 1
  for (const index of [0, 13, 26, 39]) {
    deck[index] = 1;
  }

  // Make all of the 2 face cards have a Score of 2
  for (const index of [1, 14, 27, 40]) {
    deck[index] = 2;
  }

  // Repeat...
  for (const index of [2, 15, 28, 41]) {
    deck[index] = 3;
  }

  for (const index of [3, 16, 29, 42]) {
    deck[index] = 4;
  }

  for (const index of [4, 17, 30, 43]) {
    deck[index] = 5;
  }

  for (const index of [5, 18, 31, 44]) {
    deck[index] = 6;
  }

  for (const index of [6, 19, 32, 45]) {
    deck[index] = 7;
  }

  for (const index of [7, 20, 33, 46]) {
    deck[index] = 8;
  }

  for (const index of [8, 21, 34, 47]) {
    deck[index] = 9;
  }

  // Have all of the 10, Jack, Queen, and King faces have a Score of 10
  for (const index of [
    9, 10, 11, 12, 22, 23, 24, 25, 35, 36, 37, 38, 48, 49, 50, 51,
  ]) {
    deck[index] = 10;
  }
}

// }

// const playerHand = new Array();
// playerHand.push(newCard1);
