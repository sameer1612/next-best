import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.scss";
import { getAbout, getCompletion } from "./api/openai.ts";
import Header from "./components/header/header.tsx";
import { MediaCard } from "./components/media-card/media-card.tsx";
import { Search } from "./components/search/search.tsx";
import { Media } from "./types.ts";

export function App() {
  const [medias, setMedias] = useState<Media[]>([]);
  const [recommendations, setRecommendations] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  function insertMedia(media: Media) {
    setMedias([...medias, media]);
  }

  function deleteMedia(media: Media) {
    setMedias(medias.filter((m) => m.Title !== media.Title));
  }

  async function analyze() {
    try {
      const recs = await getCompletion(medias.map((m) => m.Title));
      setRecommendations(recs);

      const aboutRes = await getAbout(medias.map((m) => m.Title));
      setAbout(aboutRes);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <Search insertMedia={insertMedia} />
        {medias.length == 0 ? (
          <>
            <Button
              variant="outline-light"
              size="lg"
              className="px-4"
              onClick={analyze}
            >
              Analyze
            </Button>
            <small className="text-light">Select atleast 3</small>
          </>
        ) : null}
      </div>
      {medias.length ? (
        <Container className="selected-medias">
          {medias.map((media) => (
            <MediaCard
              key={media.Title}
              media={media}
              deleteMedia={deleteMedia}
            ></MediaCard>
          ))}
        </Container>
      ) : null}
      {recommendations ? (
        <Container className="mt-5">
          <h4>Based on your choices recommendations are: </h4>
          <pre>{recommendations}</pre>
        </Container>
      ) : null}
      {about ? (
        <Container className="my-5">
          <h4>What your choices tell about you: </h4>
          <pre>{about}</pre>
        </Container>
      ) : null}
    </>
  );
}

export default App;
