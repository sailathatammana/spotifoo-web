import { FC } from "react";
import { IMusic } from "../types/iMusic";
import noAlbum from "../assets/picture-no-album.png";

interface iProps {
  item: IMusic;
}

const GenreCard: FC<iProps> = ({ item }) => {
  return (
    <article className="thumbs">
      <img
        src={noAlbum}
        alt=""
        className="thumbnail"
        height={200}
        width={200}
      />
      <h3>{item.genre}</h3>
    </article>
  );
};
export default GenreCard;
