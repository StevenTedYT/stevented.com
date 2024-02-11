document.addEventListener("DOMContentLoaded", function () {
  var tracksContainer = document.getElementById("tracksContainer");
  var searchInput = document.getElementById("search");

  fetch("assets/data/tracks.json")
    .then((response) => response.json())
    .then((data) => {
      var tracks = data;

      function renderTracks(tracks) {
        tracksContainer.innerHTML = "";
        tracks.forEach((track) => {
          var trackItem = document.createElement("div");
          trackItem.className = "trackItem";
          trackItem.innerHTML = `
          <a style="text-decoration: none;" href="${track.download}">
            <div class="track">
              <img id="cover" src="${track.cover}" alt="" width="98" height="98" />
              <div>
                <h1 id="title" >${track.name}</h1>
                <p id="artist">${track.artist}・${track.releaseDate}</p>
              </div>
            </div>
            <div class="stream">
              <a id="streamLink" href="${track.streaming}">Stream</a>
            </div>
          </a>
          `;
          tracksContainer.appendChild(trackItem);

          trackItem.addEventListener("mouseenter", () => {
            trackItem.style.backgroundColor = "rgba(22, 24, 32)";
            trackItem.style.transition = "all 0.3s ease";
            setTimeout(() => {
              trackItem.classList.toggle("color");
            }, 200);
          });

          trackItem.addEventListener("mouseleave", () => {
            trackItem.classList.toggle("color");
            trackItem.style.transition = "all 0.3s ease";
            setTimeout(() => {
              trackItem.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 200);
          });
        });
      }

      renderTracks(tracks);

      searchInput.addEventListener("input", function () {
        var searchText = searchInput.value.toLowerCase();
        var filteredTracks = tracks.filter((track) =>
          track.name.toLowerCase().includes(searchText)
        );
        renderTracks(filteredTracks);
      });
    });
});
