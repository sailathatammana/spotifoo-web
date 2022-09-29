import { FC } from "react";
import noAlbum from "../assets/picture-no-album.png";

interface iProps {
  item: [];
}

const GenreCard: FC<iProps> = ({ item }) => {
  return (
    <article className="thumbs">
      <img src={noAlbum} alt="" />
      <h3>{item}</h3>
    </article>
  );
};
export default GenreCard;
