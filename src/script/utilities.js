// Audio class will help us to play, pause and interact with audio
export class CurrentSong {
  constructor() {
    this.audio = new Audio();

    this.songName = "";
    this.songURL = "";

    // LOCK
    this.isProcessing = false;

    this.songNameElement = document.querySelector(".song-name > p");

    this.playPauseButtonElement = document.querySelector(
      ".play-buttons .play-pause > img",
    );
  }

  async play() {
    // Prevent overlapping execution
    if (this.isProcessing) return;

    try {
      this.isProcessing = true;

      await this.audio.play();

      this.playPauseButtonElement.src = "images/pause-music.svg";
    } catch (error) {
      console.error("Play error:", error);
    } finally {
      // Release lock
      this.isProcessing = false;
    }
  }

  async pause() {
    // Prevent overlapping execution
    if (this.isProcessing) return;

    try {
      this.isProcessing = true;

      this.audio.pause();

      this.playPauseButtonElement.src = "images/play-music.svg";
    } catch (error) {
      console.error("Pause error:", error);
    } finally {
      // Release lock
      this.isProcessing = false;
    }
  }

  async togglePlayPause() {
    if (this.isProcessing) return;

    if (this.audio.paused) {
      await this.play();
    } else {
      await this.pause();
    }
  }

  changeTrack(track) {
    // Optional safety
    if (this.isProcessing) return;

    this.songName = track[0];
    this.songURL = track[1];

    this.audio.src = this.songURL;

    this.songNameElement.textContent = this.songName;
  }

  getStatus() {
    return this.audio.paused ? "paused" : "playing";
  }

  getDetails() {
    return [this.songName, this.songURL];
  }
}

// Single song card template
let singleSongCardTemplate = ` <!-- Single song card -->
            <div
              class="cursor-pointer song-card w-full h-17 lg:h-17 sm:h-25 p-1 flex items-center bg-[#121212] justify-evenly rounded-[10px] hover:bg-[#333333] transition-all duration-500 mb-1"
            >
              <!-- Song cover default image -->
              <div
                class="song-cover-default-image-container w-[15%] flex justify-center items-center"
              >
                <img
                  class="w-11 h-11 rounded-full"
                  src="images/music.jpg"
                  alt=""
                  srcset=""
                />
              </div>

              <!-- Song Name -->
              <div
                class="song-name h-12 lg:h-12 sm:h-15 w-[65%] text-gray-400 overflow-x-clip overflow-y-hidden text-[14px] font-semibold flex items-center"
              >
                <p
                  class="line-clamp-2 wrap-break-word text-[16px] lg:text-[16px] sm:text-[18px]"
                >
                  
                </p>
              </div>

              <!-- Play music svg -->
              <div
                class="play-music-svg w-[15%] flex justify-center items-center" data-song = ""
              >
                <img
                  class="w-12 h-12 rounded-full invert active:scale-[105%] transition-all duration-300 cursor-pointer"
                  src="images/play-music.svg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>`;

// DisplayFolderSongs function will display all the songs inside the given folder into Your Library section
export let displayFolderSongs = async (
  playListFolderName,
  songFolderName,
  songCardContainer,
  songsList,
  basePath,
  currentSong,
) => {
  songCardContainer.innerHTML = "";

  // Clear old songs
  songsList.length = 0;

  // Fetching the files inside the given folder
  let response = await fetch(
    `${basePath}/${playListFolderName}/${songFolderName}/`,
  );

  let resText = await response.text();

  let div = document.createElement("div");
  div.innerHTML = resText;
  let anchors = div.querySelectorAll("a");

  Array.from(anchors).forEach((anchor) => {
    if (anchor.href.endsWith(".mp3")) {
      let songName = anchor.href
        .split("/")
        .pop()
        .split("%5C")
        .slice(4)[0]
        .replaceAll("%20", " ");
      songName = songName.slice(0, songName.length - 4);

      let songURL = `${basePath}/${playListFolderName}/${songFolderName}/${songName}.mp3`;

      // Creating and appending song card to the Your playlist section
      let temp = document.createElement("div");
      temp.innerHTML = singleSongCardTemplate;
      let singleSongCard = temp.firstElementChild;

      singleSongCard.querySelector(".song-name  p").textContent = songName;
      singleSongCard.querySelector(".play-music-svg").dataset.song = songURL;

      //Adding song play event listner to songCard
      singleSongCard.addEventListener("click", async (e) => {
        currentSong.changeTrack([songName, songURL]);
        await currentSong.play();
      });

      songCardContainer.appendChild(singleSongCard);

      // Adding song name and song URL as element in songList
      songsList.push([songName, songURL]);
    }
  });

  currentSong.changeTrack(songsList[0]);
  console.log(songsList[0]);
};

// Single playlist card template
let playListCardTemplate = ` <!-- Single playlist card OG -->

            <div
              class="h-fit playlist-card lg:w-38 w-41 flex flex-col cursor-pointer transition-all duration-150 group pb-1 relative before:content-[''] before:absolute before:h-0 hover:before:h-full before:transition-all before:duration-500 before:w-full before:bottom-0 before:bg-white before:rounded-[10px]" data-folderName = ""
            >
              <!-- Cover image container -->
              <div
                class="card-container-image relative w-full flex justify-center items-center h-fit p-2 rounded-[10px] overflow-hidden"
              >
                <img
                  class="relative z-0 cover-image w-full object-contain transform rounded-[10px] duration-1000 ease-out group-hover:scale-[105%]"
                  src="https://i.scdn.co/image/ab67616d00001e02ad214fc33b05facb1e527b98"
                  alt=""
                  srcset=""
                />

                <div
                  class="play-animation-image w-[30%] absolute -bottom-[2%] group-hover:bottom-[10%] right-2 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                >
                  <svg
                    viewBox="0 0 640 640"
                    class="w-full h-full group-hover:scale-[110%]"
                  >
                    <!-- Circle (green) -->
                    <circle
                      cx="320"
                      cy="320"
                      r="256"
                      class="fill-[#1ed760] group-hover:fill-[#3be477] transition-colors duration-300"
                    />

                    <!-- Triangle (black) -->
                    <path
                      d="M276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9C244.7 215.3 240 223.4 240 232V408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4Z"
                      class="fill-black"
                    />
                  </svg>
                </div>
              </div>

              <!-- Playlist title -->
              <div class="w-[90%] playlist-title p-1 h-fit z-1">
                <h3
                  class="text-sm lg:text-lg sm:text-xl pl-3 font-semibold group-hover:text-black transition-all delay-100 line-clamp-2 wrap-break-word"
                >
                  
                </h3>
              </div>

              <!-- Playlist description -->
              <div class="w-[90%] playlist-description p-1 h-fit z-1">
                <p
                  class="font-semibold text-gray-400 lg:text-[13px] text-[10px] sm:text-[14px] pl-3 group-hover:text-gray-700 transition-all delay-100 line-clamp-2 wrap-break-word"
                >
                  
                </p>
              </div>
            </div>`;

// DisplayPlaylists function will show all the playlists as cards
export let displayPlaylists = async (
  playListFolderName,
  playlistsCardContainerElement,
  basePath,
  songCardContainer,
  songList,
  currentSong,
) => {
  // Clearing the playlist card container element
  playlistsCardContainerElement.innerHTML = "";

  // This is to check wheather it's first playlist or not after we will load the songs of first playlist at the start
  let isFirstPlaylist = true;

  // Fetching the folder names
  let response = await fetch(`${basePath}/${playListFolderName}/`);
  let resText = await response.text();

  // Creating an element so we can filter the response
  let div = document.createElement("div");
  div.innerHTML = resText;

  let anchors = div.querySelectorAll("a");

  for (const anchor of Array.from(anchors)) {
    if (anchor.href.includes("%5C") && !anchor.href.endsWith(".htaccess")) {
      // Getting current folder name
      let currentFolder = anchor.href.split("%5C").pop();
      currentFolder = currentFolder.slice(0, currentFolder.length - 1);

      // Fetching the playlist title and description
      let res = await fetch(
        `${basePath}/${playListFolderName}/${currentFolder}/info.json`,
      );
      let resJSON = await res.json();
      let playListTitle = resJSON.title;
      let playListDescription = resJSON.description;

      // Creating and appending the playlist card to the playlist container
      let temp = document.createElement("div");
      temp.innerHTML = playListCardTemplate;
      let singlePlayListCard = temp.firstElementChild;
      singlePlayListCard.dataset.folderName = `${currentFolder}`;

      singlePlayListCard.querySelector(".card-container-image > img").src =
        `${basePath}/${playListFolderName}/${currentFolder}/cover.jpg`;

      singlePlayListCard.querySelector(".playlist-title > h3").textContent =
        `${playListTitle}`;
      singlePlayListCard.querySelector(
        ".playlist-description > p",
      ).textContent = `${playListDescription}`;

      //Adding event listner to the singlePlayListCard so when it clicked we can load the songs of this playlist
      singlePlayListCard.addEventListener("click", async (e) => {
        currentSong.pause();
        await displayFolderSongs(
          "playlists",
          currentFolder,
          songCardContainer,
          songList,
          basePath,
          currentSong,
        );
      });

      // Adding the single playlist card to playlist card container
      playlistsCardContainerElement.appendChild(singlePlayListCard);

      // If it's the first playlist then we will load it's songs in the start
      if (isFirstPlaylist) {
        // Loading the playlist songs
        await displayFolderSongs(
          "playlists",
          currentFolder,
          songCardContainer,
          songList,
          basePath,
          currentSong,
        );

        isFirstPlaylist = false;
      }
    }
  }
};

export let sidebarOpenCloseEventHandling = async (
  hamburgerElement,
  closeSidebarElement,
) => {
  hamburgerElement.addEventListener("click", (e) => {
    document.querySelector(".left").classList.remove("hidden");
    document.querySelector(".right").classList.add("hidden");
  });

  closeSidebarElement.addEventListener("click", (e) => {
    document.querySelector(".left").classList.add("hidden");
    document.querySelector(".right").classList.remove("hidden");
  });
};
