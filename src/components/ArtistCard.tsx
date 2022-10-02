import { FC } from "react";
import { IMusic } from "../types/iMusic";
import noAlbum from "../assets/picture-no-album.png";
import { Link } from "react-router-dom";
import { filterTypes } from "../scripts/filterTypes";

interface iProps {
  item: IMusic;
  filterType: filterTypes;
}

const ArtistCard: FC<iProps> = ({ item, filterType }) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = noAlbum;
    event.currentTarget.className = "error";
  };

  return (
    <article className="thumbs">
      <Link to={`./${filterTypes[filterType]}/${item.artist}`}>
        <img
          src={"http://localhost:8080/" + item.pathToAlbum}
          onError={imageOnErrorHandler}
          alt=""
        />
        <h3>{item.artist}</h3>
      </Link>
    </article>
  );
};
export default ArtistCard;
