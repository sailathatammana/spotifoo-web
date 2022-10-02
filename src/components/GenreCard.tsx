import { FC } from "react";
import { Link } from "react-router-dom";
import { IMusic } from "../types/iMusic";
import noAlbum from "../assets/picture-no-album.png";
import { filterTypes } from "../scripts/filterTypes";

interface iProps {
  item: IMusic;
  filterType: filterTypes;
}

const GenreCard: FC<iProps> = ({ item, filterType }) => {
  return (
    <article className="thumbs">
      <Link to={`./${filterTypes[filterType]}/${item.genre}`} className="link">
        <img src={noAlbum} alt="" />
        <h3>{item.genre}</h3>
      </Link>
    </article>
  );
};
export default GenreCard;
