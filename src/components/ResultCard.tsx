import { FC } from "react";
import { IMusic } from "../types/iMusic";
import noAlbum from "../assets/picture-no-album.png";

interface iProps {
  item: IMusic;
}

const ResultCard: FC<iProps> = ({ item }) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = noAlbum;
    event.currentTarget.className = "error";
  };

  return (
    <article className="result-thumbs">
      <img
        src={"http://localhost:8080/" + item.pathToAlbum}
        onError={imageOnErrorHandler}
        alt=""
      />
      <div className="item-content">
        <p className="title">{item.title}</p>
        <p className="artist">{item.artist}</p>
      </div>
      <div className="music">
        <audio controls className="songplay">
          <source
            src={"http://localhost:8080/" + item.pathToMusic}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </article>
  );
};
export default ResultCard;
