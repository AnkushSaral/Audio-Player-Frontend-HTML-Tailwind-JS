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
            </div>`





            
export let displayFolderSongs = async (playListFolderName, songFolderName, songCardContainer) => {

  songCardContainer.innerHTML = "";
  



  let response = await fetch(`${playListFolderName}/${songFolderName}/`);
  
  let resText = await response.text();
  
  let div = document.createElement("div");
  div.innerHTML = resText;
  let anchors = div.querySelectorAll("a");
  let songs = [];
  Array.from(anchors).forEach((item) => {
    if (item.href.endsWith(".mp3")) {

      let songURL = item.href;

      let songName = songURL.split("/").pop().split("%5C").slice(4)[0].replaceAll("%20", " ");
      songName = songName.slice(0, songName.length-4);

      let temp = document.createElement("div");
      temp.innerHTML = singleSongCardTemplate; 

      let singleSongCard = temp.firstElementChild;

      singleSongCard.querySelector(".song-name  p").textContent = songName;
      singleSongCard.querySelector(".play-music-svg").dataset.song  = songURL;
      
      songCardContainer.appendChild(singleSongCard);
      


      
    }
  });
};


