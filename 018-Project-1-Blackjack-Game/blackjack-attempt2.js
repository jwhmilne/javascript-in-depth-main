// STEP 1. GENERATE A DECK:

const generateDeck = () => {
  // Set up card properties:
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
      deck.push(card);
      // deck.push(`The ${card.Face} of ${card.Suit}`); - returns NaN for score check for some reason
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
  return randomCard;
};

// STEP 3: CHECK SCORE:

const checkScore = (hand) => {
  // Set the score to 0
  let score = 0;
  // Set a score for each card of the handt a
  for (card of hand) {
    if (
      card.Face === "10" ||
      card.Face === "Jack" ||
      card.Face === "Queen" ||
      card.Face === "King"
    ) {
      score += 10;
    } else if (card.Face === "Ace") {
      score += 1;
    } else {
      score += Number(card.Face);
    }
  }
  if (score <= 21) {
    return score;
  } else {
    console.log("Bust!");
  }
};

// STEP 4: PLAY:

// Draw a card for the player > check score > if score is <= 21 > draw hand > repeat
// Same with dealer
// Console it all out

console.log(`Starting game...`);

console.log(" ");

console.log(`Player's turn...`);
drawCard(playerHand);
drawCard(playerHand);
console.log(`Player drew two cards...`);
console.log(playerHand);
console.log("Player's Score: " + checkScore(playerHand));
if (checkScore(playerHand) <= 17) {
  console.log("Player drew one card...");
  console.log(drawCard(playerHand));
  if (typeof checkScore(playerHand) === "number") {
    console.log("Player's Score: " + checkScore(playerHand));
  }
}

console.log(" ");

console.log(`Dealer's turn...`);
drawCard(dealerHand);
drawCard(dealerHand);
console.log(`Dealer drew two cards...`);
console.log(dealerHand);
console.log("Dealer's Score: " + checkScore(dealerHand));
if (checkScore(dealerHand) <= 17) {
  console.log("Dealer drew one card...");
  console.log(drawCard(dealerHand));
  if (typeof checkScore(dealerHand) === "number") {
    console.log("Dealer's Score: " + checkScore(dealerHand));
  }
}

console.log(" ");

console.log("--- Results ---");
if (
  checkScore(playerHand) > checkScore(dealerHand) &&
  checkScore(playerHand) <= 21 &&
  typeof checkScore(playerHand) === "number"
) {
  console.log("Player Wins!");
} else {
  console.log("Dealer Wins!");
}

// const playerHand = [];
// const dealerHand = [];

// playerHand.push(drawCard(deck));
// dealerHand.push(drawCard(deck));

// console.log("Starting Player Hand: ", playerHand);
// console.log("Checking Player Score: ", checkScore(playerHand));
// console.log("Starting Dealer Hand: ", dealerHand);
// console.log("Checking Dealer Score: ", checkScore(dealerHand));
