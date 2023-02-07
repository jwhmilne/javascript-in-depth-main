// STEP 1: GENERATE A DECK:

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
  // Use random number as indices to pick random card in deck variable:
  const randomCard = deck[randomCardIndex];
  // Add the randomCard to the hand:
  hand.push(randomCard);
  // Remove the card from the deck:
  deck.splice(randomCardIndex, 1);
  // Return the hand:
  return randomCard;
};

// STEP 3: CHECK SCORE:

const getScore = (hand) => {
  // Set the score to 0
  let score = 0;
  // Set a score for each card of the hand
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

  return score;
};

// STEP 4: PLAY MAIN GAME:

console.log(`Starting game...`);

console.log(" ");

// PLAYER TURN:

console.log(`Player's turn...`);
console.log(`Player draws two cards...`);
drawCard(playerHand);
drawCard(playerHand);
console.log(`Player hand:`);
console.log(playerHand);
console.log("Player's starting score: " + getScore(playerHand));
if (getScore(playerHand) <= 17) {
  console.log("Player draws another card...");
  console.log(drawCard(playerHand));
  console.log("Player's new score: " + getScore(playerHand));
}
if (getScore(playerHand) <= 17) {
  console.log("Player draws another card...");
  console.log(drawCard(playerHand));
  console.log("Player's new score: " + getScore(playerHand));
}
if (getScore(playerHand) <= 17) {
  console.log("Player draws another card...");
  console.log(drawCard(playerHand));
  console.log("Player's new score: " + getScore(playerHand));
}
if (getScore(playerHand) <= 17) {
  console.log("Player draws another card...");
  console.log(drawCard(playerHand));
  console.log("Player's new score: " + getScore(playerHand));
}
if (getScore(playerHand) > 21) {
  console.log(`Player busts with a score of ${getScore(playerHand)}!`);
} else {
  console.log(`Player sticks with a score of ${getScore(playerHand)}!`);
}

console.log(" ");

// DEALER TURN:

console.log(`Dealer's turn...`);
console.log(`Dealer draws two cards...`);
drawCard(dealerHand);
drawCard(dealerHand);
console.log(`Dealer's hand:`);
console.log(dealerHand);
console.log("Dealer's starting score: " + getScore(dealerHand));
if (
  getScore(dealerHand) <= 17 &&
  getScore(dealerHand) < getScore(playerHand) &&
  getScore(playerHand) <= 21
) {
  console.log("Dealer draws another card...");
  console.log(drawCard(dealerHand));
  console.log("Dealer's new score: " + getScore(dealerHand));
}
if (
  getScore(dealerHand) <= 17 &&
  getScore(dealerHand) < getScore(playerHand) &&
  getScore(playerHand) <= 21
) {
  console.log("Dealer draws another card...");
  console.log(drawCard(dealerHand));
  console.log("Dealer's new score: " + getScore(dealerHand));
}
if (
  getScore(dealerHand) <= 17 &&
  getScore(dealerHand) < getScore(playerHand) &&
  getScore(playerHand) <= 21
) {
  console.log("Dealer draws another card...");
  console.log(drawCard(dealerHand));
  console.log("Dealer's new score: " + getScore(dealerHand));
}
if (
  getScore(dealerHand) <= 17 &&
  getScore(dealerHand) < getScore(playerHand) &&
  getScore(playerHand) <= 21
) {
  console.log("Dealer draws another card...");
  console.log(drawCard(dealerHand));
  console.log("Dealer's new score: " + getScore(dealerHand));
}
if (getScore(dealerHand) > 21) {
  console.log(`Dealer busts with a score of ${getScore(dealerHand)}!`);
} else {
  console.log(`Dealer sticks with a score of ${getScore(dealerHand)}!`);
}

console.log(" ");

// STEP 5: DISPLAY RESULTS:

console.log("--- Results ---");
if (
  (getScore(playerHand) > getScore(dealerHand) && getScore(playerHand) <= 21) ||
  getScore(dealerHand) > 21
) {
  console.log("Player wins!");
} else {
  console.log("Dealer wins!");
}

// This was difficult
// Fix repetitive if statements in PLAY
