import { Entity, MediaType } from "../types";

export const sampleEntities: Entity[] = [
  {
    Title: "House",
    Year: "2004-2012",
    Rated: "TV-14",
    Released: "16 Nov 2004",
    Runtime: "44 min",
    Genre: "Drama, Mystery",
    Director: "N/A",
    Writer: "David Shore",
    Actors: "Hugh Laurie, Omar Epps, Robert Sean Leonard",
    Plot: "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
    Language: "English",
    Country: "United States",
    Awards: "Won 5 Primetime Emmys. 57 wins & 140 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.7/10" }],
    Metascore: "N/A",
    imdbRating: "8.7",
    imdbVotes: "474,417",
    imdbID: "tt0412142",
    Type: MediaType.SERIES,
    totalSeasons: "8",
    Response: "True",
  },
];
