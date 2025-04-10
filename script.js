'use strict';
//selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dicEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El= document.querySelector('#current--0');
const current1El= document.querySelector('#current--1');
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
let currentScore ;
let activePlayer ;
let playing ;
let scores;
//Insitial functiona

const intialValues = function(){
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0,0];
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    dicEl.classList.add('hidden');
   
    
}

// staring conditions

intialValues();
// const scores = [0,0];
// score0El.textContent = 0;
// score1El.textContent = 0;
// dicEl.classList.add('hidden');

const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
        //1. Generating dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        dicEl.classList.remove('hidden');
        dicEl.src = `dice-${dice}.png`;

        //3. Check for rolled 1. if true switch to next player and reset the score number 
        if(dice!==1){
            //Add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
 

        }else{
            //Switch to next player
            switchPlayer();
            
        }
    }
});
btnHold.addEventListener('click', function(){
  if(playing){
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 10){
        playing = false;
        dicEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }else{
        //switch to next player
        switchPlayer();
    }      
  }     
    
});
btnNew.addEventListener('click', intialValues);



