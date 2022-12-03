var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = {
        Value: values[x],
        Suit: suits[i],
      };
      deck.push(card);
    }
  }
  return deck;
}

console.log(getDeck());

// Need to work out how to add values to each card, so that A = 1, 2 = 2, J = 10, Q = 10, K = 10 (and so on)
