import { displayFolderSongs, displayPlaylists } from "./utilities.js";

let els = {
  songCardContainer: document.querySelector(".playlist-songs"),
  playlistsCardContainer: document.querySelector(".playlists-cards-container"),
  basePath: "http://127.0.0.1:3000/src",
  songList: [],
};

async function onLoad() {
  
  

  await displayPlaylists("playlists", els.playlistsCardContainer, els.basePath, els.songCardContainer, els.songList);




}

onLoad();
