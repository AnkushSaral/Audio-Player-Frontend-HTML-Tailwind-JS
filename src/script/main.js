import { displayFolderSongs, displayPlaylists } from "./utilities.js";

let els = {
  songCardContainer: document.querySelector(".playlist-songs"),
  playlistsCardContainer: document.querySelector(".playlists-cards-container"),
  basePath: "http://127.0.0.1:3000/src",
  songList: [],
};

async function onLoad() {
  await displayFolderSongs(
    "playlists",
    "Diljit",
    els.songCardContainer,
    els.songList,
    els.basePath,
  );

  await displayPlaylists("playlists", els.playlistsCardContainer, els.basePath);
}

onLoad();
