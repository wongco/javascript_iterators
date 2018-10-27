// Write a function called listNames which takes in an array of songs and console.logs the name of each one.

function listNames(songsArr) {
  songsArr.forEach(function(song) {
    console.log(song.name);
  });
}

//listNames(songs);

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

function listSongDetails(songsArr) {
  songsArr.forEach(function(song) {
    console.log(`${song.name}, by ${song.artist} ${song.duration}`);
  });
}

//listSongDetails(songs);

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(songsArr) {
  return songsArr.filter(function(song) {
    return song.month >= 6 && song.month <= 8;
  }).length;
}

// summerJamCount(songs);

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(songsArr) {
  return songsArr.map(function(song) {
    return song.duration;
  });
}

// getDurations(songs);

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

function getDurationsInSeconds(songsArr) {
  return songsArr.map(function(song) {
    var durationArr = song.duration.split(':');
    return parseInt(durationArr[0]) * 60 + parseInt(durationArr[1]);
  });
}

//getDurationsInSeconds(songs);

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

function getMainArtists(songsArr) {
  return songsArr.map(function(songs) {
    return songs.artist.split(' featuring ')[0];
  });
}

//getMainArtists(songs);

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.

function getBigHits(songsArr) {
  return songsArr.filter(function(song) {
    return song.weeksAtNumberOne >= 10;
  });
}

//getBigHits(songs);

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.

function getShortSongs(songsArr) {
  return songsArr.filter(function(song) {
    var durationArr = song.duration;
    return parseInt(durationArr[0]) < 3;
  });
}

//getShortSongs(songs);

// Write a function called getSongsByArtist which takes in an array of songs and the name of an artist and returns an array of songs by that artist.

function getSongsByArtist(songsArr, artist) {
  return songsArr.filter(function(song) {
    return song.artist === artist;
  });
}

// Refactor summerJamCount to use reduce!
function summerJamCount(songsArr) {
  return songsArr.reduce(function(total, song) {
    if (song.month >= 6 && song.month <= 8) {
      total++;
    }
    return total;
  }, 0);
}

//summerJamCount(songs);

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

function getTotalDurationInSeconds(songs) {
  return getDurationInSeconds(songs).reduce(function(total, songDuration) {
    return total + songDuration;
  });
}

getTotalDurationInSeconds(songs);

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

function getSongCountByArtist(songsArr) {
  return songsArr.reduce(function(songCount, song) {
    songCount[song.artist]
      ? songCount[song.artist]++
      : (songCount[song.artist] = 1);
    return songCount;
  }, {});
}

//getSongCountByArtist(songs);

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

function averageWeeksAtNumberOne(songsArr) {
  return (
    songsArr.reduce(function(totalWeeks, song) {
      return totalWeeks + song.weeksAtNumberOne;
    }, 0) / songsArr.length
  );
}

// averageWeeksAtNumberOne(songs);
