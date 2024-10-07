function moveTen(s){
  let letters = s.split("")
  let numbers = []
  
  for(let i = 0; i < letters.length; i++) {
    numbers[i] = letters[i].charCodeAt() + 10
    
    if (numbers[i] > 122) {
      numbers[i] = 96 + (numbers[i] - 122)
    }
    
  }
  return (numbers.map((item) => String.fromCharCode(item))).join("")
}



moveTen("alz")


function sockMerchant(n, ar) {
    let obj = {}
    
    for(let i = 0; i < ar.length; i++){
      if(obj[ar[i]]) {
        obj[ar[i]]++
      }
      else {
        obj[ar[i]] = 1
      }
    }
  
  let count = 0
  
  for(let num in obj) {
    if(obj[num] >= 2) {
      count += parseInt(obj[num]/2)
    }
  }
  return count

}
sockMerchant(7, [1,2,1,2,1,3,2,3,4,4])


// Dice Game: Two players roll two dice, and the player with the higher total wins

// Function to simulate rolling a single die (1-6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate rolling two dice for a player
function rollDice() {
    let die1 = rollDie();
    let die2 = rollDie();
    let total = die1 + die2;
    console.log(`Rolled: ${die1} and ${die2} | Total: ${total}`);
    return total;
}

// Function to play a round of the dice game
function playRound(player1Name, player2Name) {
    console.log(`\n${player1Name}'s Turn:`);
    let player1Score = rollDice();

    console.log(`\n${player2Name}'s Turn:`);
    let player2Score = rollDice();

    console.log(`\n${player1Name}'s Score: ${player1Score}`);
    console.log(`${player2Name}'s Score: ${player2Score}`);

    if (player1Score > player2Score) {
        console.log(`${player1Name} Wins!`);
        return player1Name;
    } else if (player2Score > player1Score) {
        console.log(`${player2Name} Wins!`);
        return player2Name;
    } else {
        console.log("It's a Tie!");
        return null; // No winner in case of a tie
    }
}

// Function to handle multiple rounds and declare an overall winner
function playGame() {
    let rounds = 3; // Number of rounds
    let player1Name = "Player 1";
    let player2Name = "Player 2";
    let player1Wins = 0;
    let player2Wins = 0;

    console.log(`Welcome to the Dice Game! Best of ${rounds} rounds!`);

    for (let i = 1; i <= rounds; i++) {
        console.log(`\n--- Round ${i} ---`);
        let winner = playRound(player1Name, player2Name);

        if (winner === player1Name) {
            player1Wins++;
        } else if (winner === player2Name) {
            player2Wins++;
        }
    }

    console.log("\nFinal Results:");
    console.log(`${player1Name} Wins: ${player1Wins}`);
    console.log(`${player2Name} Wins: ${player2Wins}`);

    if (player1Wins > player2Wins) {
        console.log(`Overall Winner: ${player1Name}`);
    } else if (player2Wins > player1Wins) {
        console.log(`Overall Winner: ${player2Name}`);
    } else {
        console.log("The game ends in a Tie!");
    }
}

// Start the game
playGame();
