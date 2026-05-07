import {
  displayPlaylists,
  sidebarOpenCloseEventHandling,
  CurrentSong,
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

  basePath: "http://127.0.0.1:3000/src",

  songList: [],
};

async function onLoad() {
  let currentSong = new CurrentSong();

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

  // This playbarEventHandling function will handle playbar related events like play pause seek duration etc
  let playbarEventHandling = async (
    songName,
    previousButton,
    playPauseButton,
    nextButton,
    currentSong,
    songList,
  ) => {
    // Adding Eventlistner to the playPauseButton
    playPauseButton.addEventListener("click", async (e) => {
      let songStatus = currentSong.getStatus();

      if (songStatus === "paused") {
        await currentSong.play();
        console.log("song playing");
      } else {
        currentSong.pause();
      }
    });

    // Adding Eventlistner to the previousButton
    previousButton.addEventListener("click", async (e) => {
      await currentSong.pause();

      for (const [index, item] of songList.entries()) {
        if (item[0] == currentSong.getDetails()[0] && index >= 1) {
          currentSong.changeTrack(songList[index - 1]);
          await currentSong.play();
          break;
        }
      }
    });

    // Adding Eventlistner to the nextButton
    nextButton.addEventListener("click", async (e) => {
      await currentSong.pause();

      for (const [index, item] of songList.entries()) {
        if (
          item[0] == currentSong.getDetails()[0] &&
          index < songList.length - 1
        ) {
          currentSong.changeTrack(songList[index + 1]);
          await currentSong.play();
          break;
        }
      }
    });
  };

  await playbarEventHandling(
    els.songName,
    els.previousButton,
    els.playPauseButton,
    els.nextButton,
    currentSong,
    els.songList,
  );
}

onLoad();
