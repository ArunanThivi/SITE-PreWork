/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var pattern = [];
var progress = 0;
var gamePlaying = false; //Is instance of game currently running?
var tonePlaying = false; //Is sound currently playing?
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;
var clueHoldTime = 1000;

function startGame() {
  pattern = [];
  progress = 0;
  strikes = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  document.getElementById(`strike1`).classList.add("hidden");
  document.getElementById(`strike2`).classList.add("hidden");
  document.getElementById(`strike3`).classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generateSequence();
  playClueSequence();
}

function generateSequence() {
  for (var i = 0; i < 10; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log("NEW PATTERN" + pattern);
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        clueHoldTime *= .8;
        playClueSequence();
      }
    } else {
      //scheck the next guess
      guessCounter++;
    }
  } else {
    strikes++;
    console.log(`strike${strikes}`);
    document.getElementById(`strike${strikes}`).classList.remove("hidden");
    if (strikes == 3) {
      loseGame();
    }
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
