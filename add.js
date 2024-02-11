const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

function addMusic(data) {
  const music = JSON.parse(fs.readFileSync("assets/data/tracks.json", "utf-8"));
  music.push(data);
  fs.writeFileSync("assets/data/tracks.json", JSON.stringify(music));
}

function add() {
  const name = prompt("Name: ");
  const artist = prompt("Artist: ");
  const cover = prompt("Cover: ");
  const streaming = prompt("Streaming: ");
  const releaseDate = prompt("Release Date: ");
  const download = prompt("Download: ");
  const data = { name, artist, streaming, releaseDate, download, cover };
  addMusic(data);
}
add();
