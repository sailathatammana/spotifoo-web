import { FC } from "react";
import { IMusic } from "../types/iMusic";

interface iProps {
  item: IMusic;
  index: number;
}

const FilterCard: FC<iProps> = ({ item, index }) => {
  console.log(index + 1);

  return (
    <article className="filter-thumbs">
      <div className="filter-id">
        <p className="id">{index + 1}</p>
      </div>
      <div className="filter-content">
        <p className="title">{item.title}</p>
        <p className="artist">{item.artist}</p>
      </div>
    </article>
  );
};
export default FilterCard;
