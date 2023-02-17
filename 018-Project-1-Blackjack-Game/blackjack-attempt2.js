// BLACKJACK PROJECT: ASSISTED CHANGES

// STEP 1: GENERATE A DECK:

const generateDeck = () => {
  // Set up card properties:
  const FACES = [
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
  const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
  // Create a place to put each card in:
  let deck = [];
  // Get every deck and array:
  for (let i = 0; i < SUITS.length; i++) {
    for (let x = 0; x < FACES.length; x++) {
      // Create a card object with every suit and face:
      let card = {
        Face: FACES[x],
        Suit: SUITS[i],
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
// Draw first two cards
drawCard(playerHand);
drawCard(playerHand);
// Show first two cards via nice concatenation
console.log(`> ${playerHand[0].Face} of ${playerHand[0].Suit}
> ${playerHand[1].Face} of ${playerHand[1].Suit}`);
// Assign player score to variable
let playerScore = getScore(playerHand);
// Display player score
console.log(`Player's score: ${playerScore}`);

// Set conditions for drawing cards
while (playerScore <= 17) {
  console.log("Player draws another card...");
  // Draw card
  drawCard(playerHand);
  // Show last card of hand (just dealt)
  console.log(
    `> ${playerHand[playerHand.length - 1].Face} of ${
      playerHand[playerHand.length - 1].Suit
    }`
  );
  // Get score again
  playerScore = getScore(playerHand);
  // Display score
  console.log(`Player's new score: ${playerScore}`);
}

// Say whether stick or bust
if (playerScore > 21) {
  console.log(`Player busts with a score of ${playerScore}!`);
} else {
  console.log(`Player sticks with a score of ${playerScore}!`);
}

console.log(" ");

// DEALER'S TURN:

console.log(`Dealer's turn...`);
console.log(`Dealer draws two cards...`);
// Draw first two cards
drawCard(dealerHand);
drawCard(dealerHand);
// Show first two cards via nice concatenation
console.log(`> ${dealerHand[0].Face} of ${dealerHand[0].Suit}
> ${dealerHand[1].Face} of ${dealerHand[1].Suit}`);
// Assign dealer score to variable
let dealerScore = getScore(dealerHand);
// Display dealer score
console.log(`Dealer's score: ${dealerScore}`);

// Set conditions for drawing cards
// Conditions are more complicated for dealer
if (dealerScore > playerScore || playerScore > 21) {
  console.log(
    `Dealer chuckles smugly at the easy victory and wins with a score of: ${dealerScore}`
  );
} else
  while (dealerScore <= 17 && dealerScore < playerScore) {
    console.log("Dealer draws another card...");
    // Draw card
    drawCard(dealerHand);
    // Show last card of hand (just dealt)
    console.log(
      `> ${dealerHand[dealerHand.length - 1].Face} of ${
        dealerHand[dealerHand.length - 1].Suit
      }`
    );
    // Get score again
    dealerScore = getScore(dealerHand);
    // Display score
    console.log(`Dealer's new score: ${dealerScore}`);
  }

// Show if bust
// No point showing if "stick" because either win or bust
if (dealerScore > 21) {
  console.log(`Dealer busts with a score of ${dealerScore}!`);
}

// STEP 5: DISPLAY RESULTS:

console.log(" ");
console.log("--- Results ---");
if ((playerScore > dealerScore && playerScore <= 21) || dealerScore > 21) {
  console.log("Player wins!");
} else {
  console.log("Dealer wins!");
}
