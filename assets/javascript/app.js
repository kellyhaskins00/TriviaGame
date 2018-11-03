//global variables

//seconds for timer
var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
	question: "What was the name of Angela's sick cat that Dwight killed?",
	answers: ["Angel Tail", "Sprinkles", "Mr. Longwhiskers", "Princess Puss"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Sprinkles",
	image: "./assets/images/sprinkles.png"
};
var question02 = {
	question: "When Andy decides not to sell the family boat, where does he sail to?",
	answers: ["Bermuda", "The Bahamas", "Cape Cod", "Jamaica"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Bermuda",
	image: "./assets/images/andySails.png"
};
var question03 = {
	question: "What was the name of Kevin's band that auditioned for Pam and Roy's wedding?",
	answers: ["Scranjokers", "The Jokers", "Scrantones", "Scrantonicity"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Scrantonicity",
	image: "./assets/images/kevin.jpg"
};
var question04 = {
	question: "Where were the first Dundies held?",
	answers: ["At Outback Steak House", "At Fuddruckers", "At Chili's", "At Applebee's"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "At Chili's",
	image: "./assets/images/dundiesChilis.jpg"
};
var question05 = {
	question: "What did Jan throw at Michael's television in the Dinner Party episode?",
	answers: ["A Dundie Award", "A Candle", "One of Michael's Trains", "A Dwight Schrute bobblehead"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "A Dundie Award",
	image: "./assets/images/dundiesAward.jpg"
};
var question06 = {
	question: "What is the name of the Booze Cruise Captain?",
	answers: ["Captain James", "Captain John", "Captain Jeff", "Captain Jack"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Captain Jack",
	image: "./assets/images/captainJack.jpg"
};
var question07 = {
	question: "What food did Ryan start the fire with?",
	answers: ["A Pizza", "A Cheese Pita", "A Poptart", "Popcorn"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "A Cheese Pita",
	image: "./assets/images/cheesePita.jpg"
};
var question08 = {
	question: "What did Michael sell at his telemarketing job?",
	answers: ["Insurance", "Paper", "Diet Pills", "Printers"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Diet Pills",
	image: "./assets/images/michaelJob.jpg"
};
var question09 = {
	question: "What item of Dwight's did Jim puts in jello?",
	answers: ["Mug", "Calculator", "Stapler", "His Bobblehead"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Stapler",
	image: "./assets/images/stapler.jpg"
};
var question10 = {
	question: "Break me of a piece of that ______!",
	answers: ["Kit Kat Bar", "Applesauce", "Grey Poupon", "Snickers Bar"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Kit Kat Bar",
	image: "./assets/images/kitKat.jpg"
};


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

// Functions

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer was " + obj.correct + "<br>");
		var answerImage = $("<img>");                    
		answerImage.attr("height", "250");
		answerImage.attr("src", obj.image);
		answerImage.addClass("character")
		$(".content-div").append(answerImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};

	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Correct!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Incorrect!");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
	};

	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Here's how you did!");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Start Over?");
		$(".content-div").append(resetButton);
	}

	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);
// Running Code

start();