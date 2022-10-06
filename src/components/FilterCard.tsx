import { FC } from "react";
import { IMusic } from "../types/iMusic";
import AudioPlayer from "./AudioPlayer";

interface iProps {
  item: IMusic;
  index: number;
}

const FilterCard: FC<iProps> = ({ item, index }) => {
  return (
    <article className="filter-thumbs">
      <div className="filter-id">
        <p className="id">{index + 1}</p>
      </div>
      <div className="filter-content">
        <p className="title">{item.title}</p>
        <p className="artist">{item.artist}</p>
      </div>
      <div className="music">
        <AudioPlayer path={item.pathToMusic} />
      </div>
    </article>
  );
};
export default FilterCard;
