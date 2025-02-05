
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.

// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).

function createDeck(numDecks = 1) {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
      "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
    ];
    const deck = [];
// Loop through the number of decks
    for (let d = 0; d < numDecks; d++) {
// Loop through each suit
      for (const suit of suits) {
// Add the card to the deck
        for (const value of values) {
          deck.push(`${value} of ${suit}`);
        }
      }
    }
    return deck;
  }
// TODO: Implement input validation to handle invalid inputs:

//       -  numPlayers should be a positive integer.
if (!Number.isInteger(numPlayers) || numPlayers <= 0) {
    throw new Error("numPlayers should be a positive integer.");
  }
//       -  cardsPerPlayer should be a positive integer.
  if (!Number.isInteger(cardsPerPlayer) || cardsPerPlayer <= 0) {
    throw new Error("cardsPerPlayer should be a positive integer.");
  }
//       -  Throw an error if the requested cards exceed the deck size.
  const totalCards = numDecks * 52;
  if (numPlayers * cardsPerPlayer > totalCards) {
    throw new Error("Requested cards exceed the deck size.");
  }

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.
    // Fisher-Yates algorithm used
function shuffleDeck(deck) {
    // Iterate over the deck from the last card to the second card
    for (let i = deck.length - 1; i > 0; i--) {
      // Select a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the current card with the randomly selected card
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
  
// TODO: Deal cards to the specified number of players.
// Function to deal cards to players
function dealCards(deck, numPlayers, cardsPerPlayer) {
    const hands = [];
    
    // Iterate over the number of players
    for (let i = 0; i < numPlayers; i++) {
      hands[i] = [];
      // Iterate over the number of cards per player
      for (let j = 0; j < cardsPerPlayer; j++) {
        // Deal the top card of the deck to the current player's hand
        hands[i].push(deck.pop());
      }
    } 
    // TODO: Return the hands dealt as an array of arrays.
    return hands;
  }

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
// 4 players, 13 cards each (entire 52-card deck)
console.log(shuffleAndDeal(4, 13)); 

//       -  Single player.
// 1 player, 5 cards
console.log(shuffleAndDeal(1, 5));

//       -  Minimum cards per hand.
// 4 players, 1 card each
console.log(shuffleAndDeal(4, 1));

// 4 players, 10 cards each (using 2 decks)
console.log(shuffleAndDeal(4, 10, 2));

// Test 5: Invalid input (negative number of players)
// Expected error: numPlayers should be a positive integer.
try {
  console.log(shuffleAndDeal(-1, 5));
} catch (e) {
  console.error(e.message); 
}

export default shuffleAndDeal;

