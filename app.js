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


// NEW GAME FEATURE

  // setting Global Score to 0 

  // setting Round Score to 0 

  // hidding Dice
document.querySelector('.dice').style.display = 'none';

  // setting Active Player as Player 1

  



// ROLE DICE FEATURE

document.querySelector('.btn-roll').addEventListener('click', () => {
  // dice random roll 
  let diceFace = Math.floor(Math.random() * 6) + 1;
  // displaying active player dice result 
  document.getElementById('roundscore-0').textContent = diceFace;
  // displaying the right dice img according to random dice 
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = '/dist/img/de-' + diceFace + '.png';
  // if faceDice !=== 1 ? adding round score to global score :  round score === 0 and Change Active Player
});
  
  

// HOLD POINTS FEATURE
  // adding round score to global score

  // if statement : GS > 100 ? Active Player wins : Change Active Player