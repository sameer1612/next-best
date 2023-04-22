export enum MediaType {
  MOVIE = "movie",
  SERIES = "series",
}

export interface MediaDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: MediaType;
  totalSeasons: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

export interface SearchResponse {
  Search: Media[];
  totalResults: string;
  Response: string;
}

export interface Media {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
