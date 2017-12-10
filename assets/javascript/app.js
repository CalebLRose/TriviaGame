$(document).ready(function() {
// start button begins the game
	var q1 = {
		question : "Founded in 1958 in response to the Sputnik Crisis and officially launching the space race, what does the acronym NASA stand for?",
		possibleAnswers : [
			"A. Naturalist Administration of Strange Activity",
			"B. Nautical Administration for Space Admiration",
			"C. National Aeronautics and Space Administration",
			"D. Nautical Archeology of the Spacious Abyss"],
		answer : "C. National Aeronautics and Space Administration"
	};
	var q2 = {
		question : "Alan Shepard, the first American in space, and John Glenn, the first American in Orbit, were both part of which early NASA program?",
		possibleAnswers : [
			"A. Project Jupiter",
			"B. Project Mercury",
			"C. Project Zeus",
			"D. Project Helios"],
		answer : 'B. Project Mercury'
	};
	var q3 = {
		question : "Which NASA building is so large it houses one of the world's largest air conditioning systems to stop rain clouds from forming at it's roof?",
		possibleAnswers : [
			"A. Johnson Space Center",
			"B. Ames Research Center",
			"C. The Vehicle Assembly Building",
			"D. Kennedy Space Center"],
		answer : "C. The Vehicle Assembly Building"
	};
	var q4 = {
		question : "A big part of NASA is scientific research. In a recent study NASA was paying people to stay in bed in order to study the effects of what?",
		possibleAnswers : [
			"A. Prolonged Weightlessness",
			"B. Gravity Sickness",
			"C. Chemtrails Effect on the Human Brain",
			"D. Electromagnetic Hypersensitivity"],
		answer : "A. Prolonged Weightlessness"
	};
	var q5 = {
		question : "Neil Armstrong and Buzz Aldrin's names are well known to most in the United States as the first men on the Moon. Who was the third member of the Apollo 11 mission?",
		possibleAnswers : [
			"A. William A. Anders",
			"B. Michael Collins",
			"C. Fred W. Haise, Jr.",
			"D. Charlie Duke"],
		answer : "B. Michael Collins"
	};
	var q6 = {
		question : "Yes, the smartphone in your pocket has more computing power than the Apollo Guidance Computer, but it was no slouch? Which prestigious university designed the system that put Man on The Moon?",
		possibleAnswers : [
			"A. Brown University",
			"B. California Institute of Technology",
			"C. Massachusetts Institute of Technology",
			"D. Johns Hopkins University"],
		answer : "C. Massachusetts Institute of Technology"
	};
	var q7 = {
		question : "Which two countries were not memebers of the 1998 International Space Station Agreements that included the United States, Russia, Japan, Canada and European Space Agency?",
		possibleAnswers : [
			"A. Israel and Spain",
			"B. Switzerland and Egypt",
			"C. France and South Korea",
			"D. Austria and Portugal"],
		answer : "D. Austria and Portugal"
	};
	var q8 = {
		question : "Some people still believe NASA's Moon landing was faked. Which author and director made a movie so real for its time that some belive they were in on the ruse?",
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
	var timer = 30;
	var questionTimer;
	function countdown(){
		if (timer == 0){
			clearInterval(questionTimer);
			nextQuestion();
		} else {
			$("#timer").text("Time Left: "+timer);
			timer--;
		}
	};
	function displayQuestion(){
		questionTimer = setInterval(countdown, 1000);
		$("#question").text(quesArray[count].question);
		$("#btn1").text(quesArray[count].possibleAnswers[0]);
		$("#btn2").text(quesArray[count].possibleAnswers[1]);
		$("#btn3").text(quesArray[count].possibleAnswers[2]);
		$("#btn4").text(quesArray[count].possibleAnswers[3]);

		// count++;
		// console.log(count);
		// questionTimer();
		// console.log("timer: "+questionTimer);
		// if (count >= quesArray.length){
		// 	clearInterval(nextQuestion);
		// 	results();
		// };
	};

	function nextQuestion(){
		count++;
		timer = 30;
		console.log("count: "+count);
		displayQuestion();
		// displayQuestion(setInterval,30000);
	};


	function startGame(){
		displayQuestion();
		$("#startBtn").css("visibility","hidden");
		console.log(quesArray[count]);
	};

	// function results(){
	// 	clearInterval(nextQuestion);
	// 	$("#results").css("visibility","visible");
	// 	$("#correct").text("Correct Answers: "+correct);
	// 	$("#incorrect").text("Inorrect Answers: "+incorrect);
	// 	$("#unanswered").text("Unanswered: "+unanswered);
	// }

// show one question at a time. each question has an independant timer
		
		
	// 

	$("#startBtn").on("click",startGame);

// when user chooses an answer or when timer runs out show the correct answer 
// and let user know if timer ran out or if answer was correct or incorrect.

// after all questions are finished, show user number of correct, incorrect, and unanswered questions. 

// add option to retake quiz that does not reload the page
})