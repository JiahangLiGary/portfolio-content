var myMusic = document.getElementById("music");
var music_name = document.getElementById("song_name");
var song =
  "./music/Anthem Lights - Best of 2012： Payphone／Call Me Maybe／Wide Awake／Starship／We Are Young.mp3";
var x = 1;
var song_name = "Endwalker - Footfalls";
function songSearch(x) {
  switch (x) {
    case 1:
      song = "./music/01.Endwalker - Footfalls.mp3";
      song_name = "Endwalker - Footfalls";
      break;
    case 2:
      song = "./music/Close in the Distance.mp3";
      song_name = "Close in the Distance";
      break;
    case 3:
      song = "./music/35.Flow Together.mp3";
      song_name = "Flow Together";
      break;
    case 4:
      song = "./music/26.冥き水底 (Scions & Sinners) ～テンペスト：深部～.mp3";
      song_name = "Scions & Sinners";
      break;
    case 5:
      song =
        "./music/Anthem Lights - Best of 2012： Payphone／Call Me Maybe／Wide Awake／Starship／We Are Young.mp3";
      song_name = "Best of 2012 Mix";
      break;
  }
}

function switchSong() {
  if (x < 5) {
    x++;
    songSearch(x);
    myMusic.src = song;
    music_name.innerHTML = "Current song: " + song_name;
    play();
  } else {
    x = 1;
    songSearch(x);
    myMusic.src = song;
    music_name.innerHTML = "Current song: " + song_name;
    play();
  }
}

function play() {
  myMusic.play();
}

function pause() {
  myMusic.pause();
}

var playButton = document.getElementById("play");
var stopButton = document.getElementById("pause");
var switchButton = document.getElementById("switch");
var random_switch = document.getElementById("switch");

playButton.addEventListener("click", play);
stopButton.addEventListener("click", pause);
switchButton.addEventListener("click", switchSong);
