import { CloseButton } from "react-bootstrap";
import { Media } from "../../types";
import "./media-card.scss";

type MediaCardProps = {
  media: Media;
  deleteMedia: (media: Media) => void;
};

export function MediaCard({ media, deleteMedia }: MediaCardProps) {
  return (
    <>
      <div className="card-wrapper">
        <CloseButton
          variant="white"
          className="close-button m-1"
          onClick={() => deleteMedia(media)}
        />
        <img
          src={media.Poster}
          alt={media.Title}
          className="media-card rounded shadow"
        />
      </div>
    </>
  );
}
