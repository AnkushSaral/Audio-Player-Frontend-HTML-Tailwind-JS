import {
  displayPlaylists,
  sidebarOpenCloseEventHandling,
  CurrentSong,
  playbarEventHandling,
} from "./utilities.js";

let els = {
  songCardContainer: document.querySelector(".playlist-songs"),
  playlistsCardContainer: document.querySelector(".playlists-cards-container"),
  hamburger: document.querySelector(".hamburger-container"),
  closeSidebar: document.querySelector(".close-sidebar-container"),
  songName: document.querySelector(".song-name > p"),
  previousButton: document.querySelector(".play-buttons .previous > img"),
  playPauseButton: document.querySelector(".play-buttons .play-pause > img"),
  nextButton: document.querySelector(".play-buttons .next > img"),
  volumeImage: document.querySelector(".volume-image-container > img"),
  volumeRange: document.querySelector(".volume-range > input"),
  seekbarTrack: document.querySelector(".seekbar-track"),
  seekbarPointer: document.querySelector(".seekbar-pointer"),

  basePath: "http://127.0.0.1:3000/src",

  songList: [],
};

async function onLoad() {
  let currentSong = new CurrentSong();

  //Displaying all playlists

  await displayPlaylists(
    "playlists",
    els.playlistsCardContainer,
    els.basePath,
    els.songCardContainer,
    els.songList,
    currentSong,
  );

  //Adding the event listner to the handburger to open and close the sidebar
  sidebarOpenCloseEventHandling(els.hamburger, els.closeSidebar);

  //Handling events of playbar
  await playbarEventHandling(
    els.songName,
    els.previousButton,
    els.playPauseButton,
    els.nextButton,
    currentSong,
    els.songList,
    els.volumeImage,
    els.volumeRange,
    els.seekbarTrack,
    els.seekbarPointer,
  );
}

onLoad();
