import { FC } from "react";
import { useState } from "react";
import { IMusic } from "../types/iMusic";
import { imageOnErrorHandler } from "../scripts/methods";
import Footer from "./Footer";

interface iProps {
  item: IMusic;
}

const ResultCard: FC<iProps> = ({ item }) => {
  let [state, setState] = useState("");
  console.log("state value " + state);
  const onPress = () => {
    console.log("Hi in onPress()");
    setState(item.pathToMusic);
  };
  return (
    <article className="result-thumbs">
      <img
        src={"http://localhost:8080" + item.pathToAlbum}
        onError={imageOnErrorHandler}
        alt=""
      />
      <Footer result={state} />
      <button onClick={onPress}>
        <div className="item-content">
          <p className="title">{item.title}</p>
          <p className="artist">{item.artist}</p>
        </div>
      </button>
    </article>
  );
};
export default ResultCard;
