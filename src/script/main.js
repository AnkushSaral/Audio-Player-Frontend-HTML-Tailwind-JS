import {displayFolderSongs} from "./utilities.js";

let els = {
songCardContainer : document.querySelector(".playlist-songs"),
}













async function onLoad() {
  await displayFolderSongs("playlists", "Diljit", els.songCardContainer);
}

onLoad();
