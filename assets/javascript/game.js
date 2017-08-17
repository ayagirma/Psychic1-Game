
// all the 26 letters that would be predicted
// test again

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
                       'l','m','n','o','p','q','r','s','t','u','v',
                       'w','x','y','z'];
  var wins = 0;
  var losses= 0;
  var guessLeft = 10;
  var guessedL = [];
  
  

   document.onkeyup = function(event) {
   //        // variable to hold user guess
         var userGuess = event.key;
         // this code push the gussing letter from the user
          guessedL.push(userGuess);
        // computer pridicting the letters and hold on pridictedL variable
         var predictedL = alphabet[Math.floor(Math.random() * alphabet.length)];

       //comparing both pridictedL by computer and UserGuess
         if(userGuess === predictedL){

               wins++;
              guessLeft = 10;
                
           }
           // if not effeciently pridicted guessLeft will dicrimented also losses will be incremented
       else{
            guessLeft--;
            
        }
        // if guess hit wrong key that will be also gained the point to losses.
        if (guessLeft === 0){
          losses++;
          guessLeft = 10;
        }
        
       var html = "<p>Guess what letter I'm thinking of:</p>" + "<p>Wins: " + wins + "</p>" + "<p>Loses: "+ losses 
       + "<p>Guesses Remaining: " + guessLeft + "<p>Guessed Letter: " +  guessedL.join(', ');
           //Shows guessed letters here
       document.querySelector("#gamOfPridiction").innerHTML = html;
       document.getElementById('wins').innerHTML = "Wins: " + wins;
       document.getElementById('losses').innerHTML = "Losses: " + losses;
       document.getElementById('guessLeft').innerHTML = "Guess Left: " + guessesLeft;
       document.getElementById('guessedL').innerHTML = "Your Guesses so far " + guessedL;       
}