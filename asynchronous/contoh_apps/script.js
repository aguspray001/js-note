$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dcf8c70f&s=" + $(".input-keyword").val(),
    success: (res) => {
      const movies = res.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      // find a class .movie-container and fill with cards
      $(".movie-container").html(cards);
      // when button detail is clicked
      $(".modal-detail-button").on("click", function () {
        console.log($(this).data("imdbid"));
        $.ajax({
          url:
            `http://www.omdbapi.com/?apikey=dcf8c70f&i=` +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetails = showMovieDetails(m);

            $(".modal-body").html(movieDetails);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

showMovieDetails = (m) => {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3 mt-5">
        <img src="${m.Poster}" alt="" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">${m.Title} (${m.Year})</li>
          <li class="list-group-item"><strong>Director: </strong>${m.Director} </li>
          <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writer: </strong>${m.Writer} </li>
          <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot} </li>

        </ul>
      </div>
    </div>
  </div>`;
};

showCards = (m) => {
  return `<div class="col-md-4 mb-5">
<div class="card">
  <img src="${m.Poster}" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
  </div>
</div>
</div>`;
};
