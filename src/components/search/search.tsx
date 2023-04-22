import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getSearchResults } from "../../api/omdb";
import { Media, MediaType } from "../../types";
import "./search.scss";

type SearchProps = {
  insertMedia: (media: Media) => void;
};

export function Search({ insertMedia }: SearchProps) {
  const [term, setTerm] = useState("");
  const [message, setMessage] = useState("");
  const [mediaType, setMediaType] = useState<MediaType>(MediaType.MOVIE);
  const [searchResults, setSearchResults] = useState<Media[]>([]);

  async function handleSearch() {
    if (term.trim().length < 3) {
      setMessage("Minimum 3 characters required");
      return;
    }

    setMessage("...");
    const results = await getSearchResults(term, mediaType);
    if (results.Search) {
      setSearchResults(results.Search);
      setMessage("");
    } else {
      setMessage("Not found!");
    }
  }

  function addToMasterList(res: Media) {
    insertMedia(res);
    setSearchResults([]);
    setTerm("");
    setMessage("");
  }

  return (
    <div className="wrapper">
      <Form.Control
        type="text"
        placeholder="Enter name here..."
        className="mb-2"
        id="search-box"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div className="search-options d-flex mb-4">
        <Form.Select
          className="me-3"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value as MediaType)}
        >
          <option value={MediaType.MOVIE}>Movie</option>
          <option value={MediaType.SERIES}>TV Series</option>
        </Form.Select>
        <Button variant="light" className="px-4" onClick={handleSearch}>
          Add
        </Button>
      </div>
      {searchResults.length ? (
        <div className="search-results d-flex">
          {searchResults.map((res) => {
            return (
              <img
                src={res.Poster}
                alt={res.Title}
                className="mx-1 rounded shadow"
                onClick={() => addToMasterList(res)}
              />
            );
          })}{" "}
        </div>
      ) : (
        <h2 className="text-light text-center w-100 mt-5">{message}</h2>
      )}
    </div>
  );
}
