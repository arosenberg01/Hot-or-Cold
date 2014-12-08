
$(document).ready(function(){
	
	var secretNum = "Nothing";

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	// $(".new").click(function() {

  	// 	secretNum = generateNum();
  	// 	alert(secretNum);

  	// });

	

  	function generateNum() {
  		return Math.floor(Math.random() * 100 + 1);
  	}

	$("#guessButton").click(function() {
  		
		var secretNum = generateNum();
		console.log(secretNum);
  		var userNum = $("#userGuess").val();

  		if (secretNum == userNum) {
  			$("#feedback").text("You guessed it! It's " + secretNum);
  		}
  	});

  	

});


