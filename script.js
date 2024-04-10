
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}


// when player wins 
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number = (document.querySelector('.guess').value); 
  if (!guess) {
  displayMessage('No number!')
    
  }else if (guess == secretNumber) {
    displayMessage( "Correct number");
    displayMessage(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width='30rem';
    if (score > heighscore) {
      heighscore = score;
      document.querySelector('.highscore').textContent = heighscore;
    }   
    
  }else if (guess !== secretNumber){
    if (score > 1  ){
      displayMessage ( guess > secretNumber ?'Too High ' : 'Too low ' ); 
      score-- ; 
      document.querySelector('.score').textContent = score ;
    }else {
      displayMessage('You lost the game ');
      document.querySelector('.score').textContent = 0 ; 
    }
  }
});

document.querySelector('.again').addEventListener( 'click',function(){
  score = 20 ; 
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score ;
  document.querySelector('.number').textContent  = '?';
  document.querySelector('.guess').value = '' ;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';  

});