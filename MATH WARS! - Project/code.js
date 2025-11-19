setScreen("homescreen");
var timer;
var answer;
var score = 2;
var scoreHistory = [];
onEvent("button1", "click", function() {
  setScreen("instructionscreen");
});
onEvent("Restart", "click", function() {
  setScreen("homescreen");
});
onEvent("button2", "click", function() {
  setScreen("firstquestion");
  hideElement("checksign");
  hideElement("wrongsign");
  score = 2;
  scoreHistory = []; 
  setNumber("scorelabel", score);
  timer = 31;
  timedLoop(1000, function() {
    timer = timer - 1;
    setText("timer", timer);
    if (timer == 0) {
      stopTimedLoop();
      setScreen("resultscreen");
      setNumber("finalscore", score);
      console.log("Score History: " + scoreHistory); // For debug/log
    }
  });
});
// First answer
onEvent("firstanswer", "click", function() {
  showElement("checksign");
  setTimeout(function() {
    setScreen("secondquestion");
    hideElement("checksign2");
    hideElement("wrongsign2");
  }, 1000);
});
// Second answer
onEvent("secondanswer", "click", function() {
  showElement("checksign2");
  setTimeout(function() {
    setScreen("fill_in_the_blanks");
    showQuestion();
  }, 1000);
});
// Show question function
function showQuestion() {
  if (timer == 0) {
    setScreen("resultscreen");
    return;
  }
  var num1 = randomNumber(1, 10);
  var num2 = randomNumber(1, 10);
  answer = num1 + num2;
  setNumber("Num1", num1);
  setNumber("Num2", num2);
  setProperty("checksign3", "hidden", true);
  setProperty("wrongsign3", "hidden", true);
}
// Check answer
onEvent("Checkanswer", "click", function() {
  var userAnswer = getNumber("text_inputAnswer");
  if (userAnswer == answer) {
    setProperty("checksign3", "hidden", false);
    setProperty("wrongsign3", "hidden", true);
    score++;
  } else {
    setProperty("wrongsign3", "hidden", false);
    setProperty("checksign3", "hidden", true);
    // Optional: subtract points for wrong answer
    score--;
  }
  // Update score and add to history list
  setNumber("scorelabel", score);
  appendItem(scoreHistory, score);
});
// Next question button
onEvent("Nextbutton", "click", function() {
  setTimeout(function() {
    showQuestion();
  }, 500);
});
onEvent("savescore", "click", function( ) {
  setScreen("namescreen");
});
onEvent("submit", "click", function() {
  setScreen("scoreboard");
  var playerName = getText("NameInput");
  createRecord("Usernames", {names: playerName, highscores: score}, function() {
    getTopScores(); // Load the top 3 scores after saving
    function getTopScores() {
    readRecords("Usernames", {}, function(records) {
    // Sort scores from highest to lowest
    records.sort(function(a, b) {
      return b.highscores - a.highscores;
    });
    // Limit to top 3
    var top3 = records.slice(0, 3);
    // Display the top 3 scores (assume labels: name1, score1, name2, etc.)
    for (var i = 0; i < top3.length; i++) {
      setText("name" + (i+1), top3[i].names);
      setText("score" + (i+1), top3[i].highscores);
    }
    // Move to scoreboard screen after loading
    });
}
  });
});
