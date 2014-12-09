$(document).ready(function(){
	
	var secretNum, userNum, diff;

	function generateNum() {
	  		return Math.floor(Math.random() * 100 + 1);
	  	}

	function newGame() {
		secretNum = generateNum();
		console.log("secretNum is " + secretNum);
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
  		console.log("new game started");

  	});


	$("#guessButton").click(function(e) {
  		e.preventDefault();
		
  		userNum = parseInt($("#userGuess").val());
  		console.log(userNum);

  		userNum > secretNum ? diff = userNum - secretNum : diff = secretNum - userNum
  		console.log("Off by " + diff);


	if (secretNum == userNum) {
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




  	});

  	

});


