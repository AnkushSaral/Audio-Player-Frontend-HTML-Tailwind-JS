t songs = [];
  Array.from(as).forEach((item) => {
    if (item.href.endsWith(".mp3")) {
      songs.push(item);
    }
  });
  console.log(songs);