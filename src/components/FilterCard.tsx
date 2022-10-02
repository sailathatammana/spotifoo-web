import { FC } from "react";
import { IMusic } from "../types/iMusic";
interface iProps {
  item: IMusic;
}

const FilterCard: FC<iProps> = ({ item }) => {
  return <h2>{item.title}</h2>;
};
export default FilterCard;
