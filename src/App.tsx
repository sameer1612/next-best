import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.scss";
import { Footer } from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import { MediaCard } from "./components/media-card/media-card.tsx";
import { Search } from "./components/search/search.tsx";
import { sampleEntities } from "./data/entities.ts";
import { Media } from "./types.ts";

export function App() {
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    setMedias(sampleEntities);
  }, []);

  function insertMedia(media: Media) {
    setMedias([...medias, media]);
  }

  function deleteMedia(media: Media) {
    setMedias(medias.filter((m) => m.Title !== media.Title));
  }

  return (
    <>
      <Header />
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <Search insertMedia={insertMedia} />
        {medias.length ? (
          <Button variant="outline-light" size="lg" className="px-4">
            Analyze
          </Button>
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
      <Footer />
    </>
  );
}

export default App;
