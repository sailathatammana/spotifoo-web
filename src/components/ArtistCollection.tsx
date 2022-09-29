import { FC } from "react";

import { IMusic } from "../types/iMusic";
import ArtistCard from "./ArtistCard";

interface IProps {
  data: IMusic[];
  children: string;
}

const ArtistCollection: FC<IProps> = ({ data, children }) => {
  const Thumbnails = data.map((item) => (
    <ArtistCard key={item.id} item={item} />
  ));
  return (
    <>
      <section className="home-thumbs">
        <h2 className="title"> {children}</h2>
        <ul>{Thumbnails}</ul>
      </section>
    </>
  );
};
export default ArtistCollection;
