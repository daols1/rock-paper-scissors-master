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

let score = '';


// Event listners for the game buttons
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

// Game logic

// Initialise
let choices = [rock, paper, scissors]
let humanChoice = [rock, paper, scissors]
// Random computer choice
let compChoice = Math.floor(Math.random()*3);
let compAssign = choices[compChoice];
console.log(compAssign);

// Player

// function selector() {}

rock.addEventListener('click', function (){
    document.querySelector('.game').addEventListener('click', function (){
        document.querySelector('.game').style.visibility = 'hidden';
        rock.style.visibility = 'visible';
        rock.style.padding = '50px';

        function winnerCheckRock(){
          if (compAssign == rock){
            document.querySelector('.game').style.visibility = 'hidden';
            console.log('Tie');
          } else if (compAssign == paper) {
            console.log('You lose!');
          } else if (compAssign == scissors) {
            console.log('You win!');
          } else{
            console.log('This thing de work!');
          }
        };
        winnerCheckRock();
        function displayComp() {
          let dispComp = document.createElement('div');
          dispComp.innerHTML = compAssign;
          document.querySelector('.game').appendChild(dispComp);
        };
        displayComp();
    });
});     

scissors.addEventListener('click', function (){
  document.querySelector('.game').addEventListener('click', function (){
      document.querySelector('.game').style.visibility = 'hidden';
      scissors.style.visibility = 'visible';
      scissors.style.padding = '50px';

      // Copied and pasted  
      let pos = 0;
      let id = setInterval(frame, 1);
      function frame() {
        if (pos == -70) {
          clearInterval(id);
        } else{
          pos--; 
          scissors.style.top = pos + 75 + "%"; 
          scissors.style.left = pos + "%";
          // let rockId = document.getElementById(rock_id);
          // rockId.addEventListener('click', function () {
          //   rockId.style.visibility = 'hidden';
          //   //rockId.style.left = 0;
          // })
        }
      }
      function winnerCheckScissors(){
        if (compAssign == scissors){
          console.log('Tie');
        } else if (compAssign == paper) {
          console.log('You win!');
        } else if (compAssign == rock) {
          console.log('You lose!');
        } else{
          console.log('This thing de work!');
        }
      };
      winnerCheckScissors();
  });
});

paper.addEventListener('click', function (){
  document.querySelector('.game').addEventListener('click', function (){
      document.querySelector('.game').style.visibility = 'hidden';
      paper.style.visibility = 'visible';
      paper.style.padding = '50px';

      // Copied and pasted  
      let pos = 0;
      let id = setInterval(frame, 1);
      function frame() {
        if (pos == -70) {
          clearInterval(id);
        } else{
          pos--; 
          paper.style.top = pos + 75 + "%"; 
          paper.style.left = pos + "%";
          // let rockId = document.getElementById(rock_id);
          // rockId.addEventListener('click', function () {
          //   rockId.style.visibility = 'hidden';
          //   //rockId.style.left = 0;
          // })
        }
      }
      function winnerCheckPaper(){
        if (compAssign == paper){
          console.log('Tie');
        } else if (compAssign == rock) {
          console.log('You win!');
        } else if (compAssign == scissors) {
          console.log('You lose!');
        } else{
          console.log('This thing de work!');
        }
      };
      winnerCheckPaper();
  });
});

// Tell player to take a choice and update the choice;
// if(choices = rock && compAssign = rock){
//     rock.style.display = 'none';
// } else{
//     break;
// }


// Compare with computer choice

// Check winner

// Print winner

