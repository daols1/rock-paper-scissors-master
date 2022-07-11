// The rules btn

document.querySelector('.rule_btn').addEventListener('click', ruleShow);
function ruleShow() {
    document.querySelector('.rule').style.visibility = 'visible';
};

// Rule Close
document.querySelector('.rules_inner').addEventListener('click', ruleGo);
function ruleGo() {
    document.querySelector('.rule').style.visibility = 'hidden';
};

class Rpsgame{
    constructor(r, p, s){
        this.r = r
        this.p = p
        this.s = s
    }

    checkWinner(){
    
    }

    updateDisplay(){

    }
    
    newGame(){

    }
}



// DOM Selctions;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const selctions = document.querySelector('.selections');
const gameDiv = document.querySelector('.game_container_inner');
const selectHuman = document.querySelector('.selected_1');
const imgSelect1 = document.querySelector('.imgselect1');
const winLoseTxt = document.querySelector('.winlosetxt');
const compSlect = document.querySelector('.selected_2');
const imgSelect2 = document.querySelector('.imgselect2');
let score = document.querySelector('.score');
const playAgain = document.querySelector('[data-play-again]');
let scoreReal = 0

// Initialise
let humanChoice = [rock, paper, scissors]
var choices = [rock, paper, scissors]
var compChoice = Math.floor(Math.random()*3);
var compAssign = choices[compChoice];
// Random computer choice
selctions.style.display = 'none';

const rpsGame = new Rpsgame(rock, paper, scissors)

function game(choice){
    var choices = [rock, paper, scissors]
    var compChoice = Math.floor(Math.random()*3);
    var compAssign = choices[compChoice];
    if(choice == rock){
        selectHuman.classList.remove('paper')
        selectHuman.classList.add('rock');
        imgSelect1.src = 'images/icon-rock.svg';
        if(compAssign == rock){
            winLoseTxt.innerText = 'Its a Draw'
            compSlect.classList.remove('rock');
            compSlect.classList.add('rock')
            imgSelect2.src = 'images/icon-rock.svg';
        } else if(compAssign == paper){
            winLoseTxt.innerText = 'You loose!'
            compSlect.classList.remove('rock');
            compSlect.classList.add('paper')
            imgSelect2.src = 'images/icon-paper.svg';
        } else{
            winLoseTxt.innerText = 'You Win!'
            compSlect.classList.remove('scissors');
            compSlect.classList.add('scissors')
            imgSelect2.src = 'images/icon-scissors.svg';
        }
    } else if(choice == scissors){
        selectHuman.classList.remove('paper')
        selectHuman.classList.add('scissors')
        imgSelect1.src = 'images/icon-scissors.svg';
        if(compAssign == scissors){
            winLoseTxt.innerText = 'Its a Draw'
            compSlect.classList.remove('rock');
            compSlect.classList.add('scissors')
            imgSelect2.src = 'images/icon-scissors.svg';
        } else if(compAssign == rock){
            winLoseTxt.innerText = 'You loose!'
            compSlect.classList.remove('rock');
            compSlect.classList.add('rock')
            imgSelect2.src = 'images/icon-rock.svg';
        } else{
            winLoseTxt.innerText = 'You Win!'
            compSlect.classList.remove('scissors');
            compSlect.classList.add('paper')
            imgSelect2.src = 'images/icon-paper.svg';
        }
    } else{
        // selectHuman.classList.remove('paper')
        // selectHuman.classList.add('scissors')
        // imgSelect1.src = 'images/icon-scissors.svg';
        if(compAssign == paper){
            winLoseTxt.innerText = 'Its a Draw'
            compSlect.classList.remove('rock');
            compSlect.classList.add('paper')
            imgSelect2.src = 'images/icon-paper.svg';
        } else if(compAssign == scissors){
            winLoseTxt.innerText = 'You loose!'
            compSlect.classList.remove('rock');
            compSlect.classList.add('scissors')
            imgSelect2.src = 'images/icon-scissors.svg';
        } else{
            winLoseTxt.innerText = 'You Win!'
            compSlect.classList.remove('scissors');
            compSlect.classList.add('rock')
            imgSelect2.src = 'images/icon-rock.svg';
        }
    }
}

// Add event listeners
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        gameDiv.style.display = 'none';
        selctions.style.display = 'flex';
        game(choice)
    })
})

playAgain.addEventListener('click', (choice) => {
    selctions.style.display = 'none';
    gameDiv.style.display = 'block';
    if(winLoseTxt.innerText == 'You Win!'){
        scoreReal++
    } else if (winLoseTxt.innerText == 'You loose!'){
        scoreReal--
    } else{
        scoreReal + 0
    }
    score.innerText = scoreReal
    game(choice)
})

// Update display on click

// Check winner

// Print text WIN! or LOSS!

// Add new game btn




// Event listners for the game buttons
// let rock = document.querySelector('.rock');
// let paper = document.querySelector('.paper');
// let scissors = document.querySelector('.scissors');

// // Game logic

// // Initialise
// let choices = [rock, paper, scissors]
// let humanChoice = [rock, paper, scissors]
// // Random computer choice
// let compChoice = Math.floor(Math.random()*3);
// let compAssign = choices[compChoice];
// console.log(compAssign);

// // Player

// // function selector() {}

// rock.addEventListener('click', function (){
//     document.querySelector('.game').addEventListener('click', function (){
//         document.querySelector('.game').style.visibility = 'hidden';
//         rock.style.visibility = 'visible';
//         rock.style.padding = '50px';

//         function winnerCheckRock(){
//           if (compAssign == rock){
//             document.querySelector('.game').style.visibility = 'hidden';
//             console.log('Tie');
//           } else if (compAssign == paper) {
//             console.log('You lose!');
//           } else if (compAssign == scissors) {
//             console.log('You win!');
//           } else{
//             console.log('This thing de work!');
//           }
//         };
//         winnerCheckRock();
//         function displayComp() {
//           let dispComp = document.createElement('div');
//           dispComp.innerHTML = compAssign;
//           document.querySelector('.game').appendChild(dispComp);
//         };
//         displayComp();
//     });
// });     

// scissors.addEventListener('click', function (){
//   document.querySelector('.game').addEventListener('click', function (){
//       document.querySelector('.game').style.visibility = 'hidden';
//       scissors.style.visibility = 'visible';
//       scissors.style.padding = '50px';

//       // Copied and pasted  
//       let pos = 0;
//       let id = setInterval(frame, 1);
//       function frame() {
//         if (pos == -70) {
//           clearInterval(id);
//         } else{
//           pos--; 
//           scissors.style.top = pos + 75 + "%"; 
//           scissors.style.left = pos + "%";
//           // let rockId = document.getElementById(rock_id);
//           // rockId.addEventListener('click', function () {
//           //   rockId.style.visibility = 'hidden';
//           //   //rockId.style.left = 0;
//           // })
//         }
//       }
//       function winnerCheckScissors(){
//         if (compAssign == scissors){
//           console.log('Tie');
//         } else if (compAssign == paper) {
//           console.log('You win!');
//         } else if (compAssign == rock) {
//           console.log('You lose!');
//         } else{
//           console.log('This thing de work!');
//         }
//       };
//       winnerCheckScissors();
//   });
// });

// paper.addEventListener('click', function (){
//   document.querySelector('.game').addEventListener('click', function (){
//       document.querySelector('.game').style.visibility = 'hidden';
//       paper.style.visibility = 'visible';
//       paper.style.padding = '50px';

//       // Copied and pasted  
//       let pos = 0;
//       let id = setInterval(frame, 1);
//       function frame() {
//         if (pos == -70) {
//           clearInterval(id);
//         } else{
//           pos--; 
//           paper.style.top = pos + 75 + "%"; 
//           paper.style.left = pos + "%";
//           // let rockId = document.getElementById(rock_id);
//           // rockId.addEventListener('click', function () {
//           //   rockId.style.visibility = 'hidden';
//           //   //rockId.style.left = 0;
//           // })
//         }
//       }
//       function winnerCheckPaper(){
//         if (compAssign == paper){
//           console.log('Tie');
//         } else if (compAssign == rock) {
//           console.log('You win!');
//         } else if (compAssign == scissors) {
//           console.log('You lose!');
//         } else{
//           console.log('This thing de work!');
//         }
//       };
//       winnerCheckPaper();
//   });
// });

// Tell player to take a choice and update the choice;
// if(choices = rock && compAssign = rock){
//     rock.style.display = 'none';
// } else{
//     break;
// }


// Compare with computer choice

// Check winner

// Print winner

