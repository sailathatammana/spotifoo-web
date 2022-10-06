import { FC } from "react";
import { useState } from "react";

import { IMusic } from "../types/iMusic";
import Footer from "./Footer";

interface iProps {
  item: IMusic;
  index: number;
}

const FilterCard: FC<iProps> = ({ item, index }) => {
  let [state, setState] = useState("");
  console.log("state value " + state);
  const onPress = () => {
    console.log("Hi in onPress()");
    setState(item.pathToMusic);
  };

  return (
    <article className="filter-thumbs">
      <div className="filter-id">
        <p className="id">{index + 1}</p>
      </div>
      <Footer result={state} />
      <button onClick={onPress}>
        <div className="filter-content">
          <p className="title">{item.title}</p>
          <p className="artist">{item.artist}</p>
        </div>
      </button>
    </article>
  );
};
export default FilterCard;
