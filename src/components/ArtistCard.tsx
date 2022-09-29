import { FC } from "react";
import { IMusic } from "../types/iMusic";
import noAlbum from "../assets/picture-no-album.png";

interface iProps {
  item: IMusic;
}

const ArtistCard: FC<iProps> = ({ item }) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = noAlbum;
    event.currentTarget.className = "error";
  };

  return (
    <article className="thumbs">
      <img
        src={"http://localhost:8080/" + item.pathToAlbum}
        onError={imageOnErrorHandler}
        alt=""
      />

      <h3>{item.artist}</h3>
    </article>
  );
};
export default ArtistCard;
