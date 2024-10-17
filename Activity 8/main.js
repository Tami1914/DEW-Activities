const songs = ["Cancion1.mp3","Cancion2.mp3","Cancion3.mp3"];
const player = document.getElementById('audioPlayer');
const play = document.querySelector('.play');
const backward = document.querySelector('.backward');
const fordward = document.querySelector('.fordward');

let currentSong = 0;

player.src = songs[currentSong];

play.onclick = function(e){
    if (player.paused){
        player.play();
        e.target.classList.replace('fa-play', 'fa-pause');
    } else {
        player.pause();
        e.target.classList.replace('fa-pause', 'fa-play');
    }
}

function playSong(songNumber = 0, forcePlay = false){
    const paused = player.paused;
    player.src = songs[songNumber];
    (!paused || forcePlay) && player.play();

     const playIcons = document.querySelectorAll('#playlist li i.fa-play');

     playIcons.forEach(playIcon => playIcon.classList.add('hidden'));
     playIcons[songNumber].classList.remove('hidden');
}

backward.onclick = function(){
    currentSong--;
    if(currentSong === -1){
        currentSong = songs.length - 1;
    }
    playSong(currentSong);
}

fordward.onclick = function(){
    currentSong = ++currentSong % songs.length;
    playSong(currentSong);
}

player.onended = function(){
    currentSong = ++currentSong % songs.length;
    playSong(currentSong, true);
}