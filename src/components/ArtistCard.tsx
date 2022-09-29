import { FC } from "react";
import { IMusic } from "../types/iMusic";

interface iProps {
  item: IMusic;
}

const ArtistCard: FC<iProps> = ({ item }) => {
  return (
    <>
      <article className="thumbs">
        <img
          src={"http://localhost:8080/" + item.pathToAlbum}
          alt=""
          className="thumbnail"
          height={200}
          width={200}
        />
        <h3>{item.artist}</h3>
      </article>
    </>
  );
};
export default ArtistCard;
