/* RULES 

Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. 
Le résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de: -Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. 
Ce sera alors letour de l’autre joueur.-Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.

New game =
  Setting Global Score to 0 
  Setting Round Score to 0
  Hidding Dice
  Setting Active Player as Player 1

Rolldice =
  Defining Random Number as Dice
  DOM Image Dice equal to Random Number
  DOM Round Score equal to Random Number

  if Random Number === 1 => Active Player becomes the other player / Round Score is again set to 0
  else => Adding Random Number to Round Score and displaying

Hold =
  Adding Round Score to Global Score

  if Golbal Score > 100 => Active Player wins the game,
  else => Active Player becomes the other player

*/

// define global var
var globalScore;
var roundScore;
var activePlayer;

// FIRST TIME STARTING GAME
startGame();

// NEW GAME FEATURE

  //start game function
  document.querySelector('.btn-newgame').addEventListener('click', startGame);



// ROLE DICE FEATURE

document.querySelector('.btn-roll').addEventListener('click', () => {
  // dice random roll 
  let diceFace = Math.floor(Math.random() * 6) + 1;
  // displaying the right dice img according to random dice 
  document.querySelector('.dice').style.visibility = 'visible';
  document.querySelector('.dice').src = '/dist/img/de-' + diceFace + '.png';
  // if faceDice !== 1 ? adding round score to global score and display it : set round score to 0 and Change Active Player
  if (diceFace !== 1) {
    roundScore += diceFace;
    document.getElementById('roundscore-' + activePlayer).textContent = roundScore;
  } else {
    // avoid btn onclick behaviour
    document.querySelector('.btn-roll').disabled = true;
    document.querySelector('.btn-hold').disabled = true;
    // setting setTimeout to avoid visibility class behaviour
    setTimeout( () => {
      newRound();
      //active btn onclick behaviour
      document.querySelector('.btn-roll').disabled = false;
      document.querySelector('.btn-hold').disabled = false;
    }, 2000);
  }
});
  
  

// HOLD POINTS FEATURE
  // adding round score to global score
  document.querySelector('.btn-hold').addEventListener('click', () => {
    globalScore[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];
    // if statement : GS > 100 ? Active Player wins : Change Active Player
    if (globalScore[activePlayer] > 10) {
      //display that active player wins
      document.querySelector('.player-id-' + activePlayer).textContent = 'Gagné';
      document.querySelector('.player-' + activePlayer).classList.add("hidden");
      document.querySelector('.player-id-' + activePlayer).classList.add("font-bold");
      document.querySelector('.player-id-' + activePlayer).classList.add("text-red-600");
      // start a new game
      setTimeout( () => {
        startGame();
      }, 2000);
    } else{
      newRound();
    } 
  });
  




  // FUNCTIONS

function newRound() {
  roundScore = 0;
  document.getElementById('roundscore-' + activePlayer).textContent = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  // toogle active class to style active player
  document.querySelector('.player-0').classList.toggle('hidden');
  document.querySelector('.player-1').classList.toggle('hidden');
  //hide dice
  document.querySelector('.dice').style.visibility = 'hidden';
}

function startGame() {
    // setting Global Score to 0 
    globalScore = [0, 0];
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    
    // setting Round Score to 0 
    roundScore = 0;
    document.getElementById('roundscore-0').textContent = '0';
    document.getElementById('roundscore-1').textContent = '0';
    
    // hidding Dice
    document.querySelector('.dice').style.visibility = 'hidden';
  
    // setting Active Player as Player 1
    activePlayer = 0;

    document.querySelector('.player-0').classList.remove('hidden');
    document.querySelector('.player-1').classList.add('hidden');

    //start gamin after winning
    document.querySelector('.player-id-0').textContent = 'Joueur 1';
    document.querySelector('.player-id-1').textContent = 'Joueur 2';
    document.querySelector('.player-id-' + activePlayer).classList.remove("font-bold");
    document.querySelector('.player-id-' + activePlayer).classList.remove("text-red-600");
}