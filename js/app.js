$(document).ready(function(){
	
	var secretNum, userNum, diff, guessCount, oldGuess;

	function generateNum() {
	  		return Math.floor(Math.random() * 100 + 1);
	}

	/*--- Start game over ---*/

	function newGame() {
		secretNum = generateNum();
		$('#count').text(0)
		$('#guessList').empty();
		$("#feedback").text("Make your Guess!");
		console.log("Psst. The secret number is " + secretNum);
	}

	function nextGuess (userguess) {
	$('#count').text(guessCount + 1);
	$('#userGuess').val('');
	$('#guessList').append('<li>' + userguess + '</li>');

	}

	/*--- Generates correct feedback based on user input --- */

	function feedback(userinput) {

	    oldGuess = parseInt($('#guessList li').last().html());

	    guessCount = parseInt($('#count').text());

		if ( isNaN(userinput) ||  parseInt(userinput) < 1 || parseInt(userinput) > 100 ) { 
			$("#feedback").text("I need a number between 1-100");
		  	$('#userGuess').val('');

		} else  {

			userinput = parseInt(userinput);

			if (guessCount === 0) {

				userinput > secretNum ? diff = userinput - secretNum : diff = secretNum - userinput;

				if (secretNum === userinput) {
			  		$("#feedback").text("You guessed it! It's " + secretNum);
			  	} else if (diff < 10) {
			  		$("#feedback").text("Very hot");
			  	} else if (diff < 20) {
			  		$("#feedback").text("Hot");
			  	} else if (diff < 30) {
			  			$("#feedback").text("Warm");
			  	} else if (diff < 50) {
			  			$("#feedback").text("Cold");
			  	} else {
			  			$("#feedback").text("Ice cold");
			  	}
			  	
				nextGuess(userinput);

			} else {

			  	var newDiff =  userinput - secretNum;
				var oldDiff = oldGuess - secretNum;
				newDiff = Math.sqrt(newDiff * newDiff);
				oldDiff = Math.sqrt(oldDiff * oldDiff);

				if (secretNum === userinput) {
					$("#feedback").text("You guessed it! It's " + secretNum);
				} else if (newDiff < oldDiff) {
					$("#feedback").text("Warmer");
				} else if (newDiff > oldDiff) {
					$("#feedback").text("Colder");
				} else {
					$("#feedback").text("About the same");
				}

				nextGuess(userinput);

			}
		  	
		} 
	}

	newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$(".new").click(function(e) {
  		e.preventDefault();
  		newGame();
  	});


	$("#guessButton").click(function(e) {
  		e.preventDefault();
		userNum = $("#userGuess").val();
  		feedback(userNum);

	});

});


