import { FC } from "react";
import { Link } from "react-router-dom";
import { IMusic } from "../types/iMusic";
import { filterTypes } from "../scripts/filterTypes";
import { imageOnErrorHandler } from "../scripts/methods";

interface iProps {
  item: IMusic;
  filterType: filterTypes;
}

const ArtistCard: FC<iProps> = ({ item, filterType }) => {
  return (
    <article className="thumbs">
      <Link to={`./${filterTypes[filterType]}/${item.artist}`} className="link">
        <img
          src={"http://localhost:8080" + item.pathToAlbum}
          onError={imageOnErrorHandler}
          alt=""
        />
        <h3>{item.artist}</h3>
      </Link>
    </article>
  );
};
export default ArtistCard;
