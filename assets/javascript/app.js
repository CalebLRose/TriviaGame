$(document).ready(function() {
// start button begins the game
	var q1 = {
		question : "Founded in 1958 in response to the Sputnik Crisis, what does the acronym NASA stand for?",
		possibleAnswers : [
			"A. Naturalist Administration of Strange Activity",
			"B. Nautical Administration for Space Admiration",
			"C. National Aeronautics and Space Administration",
			"D. Nautical Archeology of the Spacious Abyss"],
		answer : "C. National Aeronautics and Space Administration"
	};
	var q2 = {
		question : "Alan Shepard, first American in space, and John Glenn, first American in orbit, were both part of which early NASA program?",
		possibleAnswers : [
			"A. Project Jupiter",
			"B. Project Mercury",
			"C. Project Zeus",
			"D. Project Helios"],
		answer : 'B. Project Mercury'
	};
	var q3 = {
		question : "Which NASA building is so large it needs massive air conditioning systems to stop rain clouds from forming at it's roof?",
		possibleAnswers : [
			"A. Johnson Space Center",
			"B. Ames Research Center",
			"C. The Vehicle Assembly Building",
			"D. Kennedy Space Center"],
		answer : "C. The Vehicle Assembly Building"
	};
	var q4 = {
		question : "In a recent study NASA was paying people to stay in bed in order to study the effects of what?",
		possibleAnswers : [
			"A. Prolonged Weightlessness",
			"B. Gravity Sickness",
			"C. Chemtrails Effect on the Human Brain",
			"D. Electromagnetic Hypersensitivity"],
		answer : "A. Prolonged Weightlessness"
	};
	var q5 = {
		question : "Neil Armstrong and Buzz Aldrin are household names. Who was the third member of the Apollo 11 mission?",
		possibleAnswers : [
			"A. William A. Anders",
			"B. Michael Collins",
			"C. Fred W. Haise, Jr.",
			"D. Charlie Duke"],
		answer : "B. Michael Collins"
	};
	var q6 = {
		question : "Which prestigious university designed the the Apollo Guidance Computer, which helped NASA get Man to The Moon?",
		possibleAnswers : [
			"A. Brown University",
			"B. California Institute of Technology",
			"C. Massachusetts Institute of Technology",
			"D. Johns Hopkins University"],
		answer : "C. Massachusetts Institute of Technology"
	};
	var q7 = {
		question : "Which two countries were not memebers of the 1998 International Space Station Agreements?",
		possibleAnswers : [
			"A. United States and Spain",
			"B. Switzerland and Egypt",
			"C. France and South Korea",
			"D. Austria and Portugal"],
		answer : "D. Austria and Portugal"
	};
	var q8 = {
		question : "Which author and director made a movie so real for its time that some belive they help fake The Moon landing?",
		possibleAnswers : [
			"A. Phillip K. Dick and Ridley Scott",
			"B. Robert Heinlein and Paul Verhoeven",
			"C. Arthur C. Clarke and Stanley Kubrick",
			"D. Joseph Millard and Freddie Francis"],
		answer : "C. Arthur C. Clarke and Stanley Kubrick"
	};
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var quesArray = [q1, q2, q3, q4, q5, q6, q7, q8];
	console.log("ques array: "+quesArray);
	var count = 0;
	var timer = 29;
	var questionTimer;
	clearInterval(questionTimer);
	function countdown(){
		if (timer == 0){
			unanswered++;
			clearInterval(questionTimer);
			$("#timer").css("display","none");
			$("#option").css("display","none");
			$("#response").css("display","block");
			$("#response").text("Oh! Missed that comet.");
			setTimeout(function(){
			nextQuestion();	
			},7000);
		} else {
			$("#timer").text("Time Left: "+timer);
			timer--;
		};
	};
	function displayQuestion(){
		$("#question").css("display","block");
		$("#timer").css("display","block");
		$("#option").css("display","block");
		questionTimer = setInterval(countdown, 1000);
		$("#question").text(quesArray[count].question);
		console.log(quesArray[count].question);
		$("#btn1").text(quesArray[count].possibleAnswers[0]);
		$("#btn2").text(quesArray[count].possibleAnswers[1]);
		$("#btn3").text(quesArray[count].possibleAnswers[2]);
		$("#btn4").text(quesArray[count].possibleAnswers[3]);
	};

	$(document).on("click", "button.choice", function(){
		var pick = $(this).text();
		$("#question").css("display","none");
		$("#timer").css("display","none");
		$("#option").css("display","none");
		console.log("i clicked: "+pick);
		console.log(quesArray[count].answer);
		clearInterval(questionTimer);
		if (pick != quesArray[count].answer){
			incorrect++;
			$("#response").css("display","block");
			$("#response").text("That is incorrect. Going to have to cancel the mission if you keep answering like this.");
		} else {
			correct++;
			$("#response").css("display","block");
			$("#response").text("Now we're cooking with rocket fuel. That is correct!");
		};
		setTimeout(function(){
		nextQuestion();	
		},7000);
		
	});

	function nextQuestion(){
		timer = 30;
		count++;
		console.log("count: "+count);
		$("#response").css("display","none");
		if(count === quesArray.length){
			results();
		} else {
			displayQuestion();
		}
	};

	function startGame(){
		$("#results").css("display","none");
		displayQuestion();
		$("#startBtn").css("display","none");
		$("#question").css("display","block");
		console.log(quesArray[count]);
	};

	function results(){
		clearInterval(questionTimer);
		$("#question").css("display","none");
		$("#results").css("display","block");
		$("#correct").text("Correct Answers: "+correct);
		$("#incorrect").text("Inorrect Answers: "+incorrect);
		$("#unanswered").text("Unanswered: "+unanswered);
		$("#restart").text("Try again?");
		$("#restart").on("click",function(){
			count = 0;
			timer = 30;
			correct = 0;
			incorrect = 0;
			unanswered = 0;
			console.log(count);
			console.log(timer);
			console.log(correct);
			console.log(incorrect);
			console.log(unanswered);
			startGame();
		});
	}

// show one question at a time. each question has an independant timer
		
		
	// 

	$("#startBtn").on("click",startGame);

// when user chooses an answer or when timer runs out show the correct answer 
// and let user know if timer ran out or if answer was correct or incorrect.

// after all questions are finished, show user number of correct, incorrect, and unanswered questions. 

// add option to retake quiz that does not reload the page
})