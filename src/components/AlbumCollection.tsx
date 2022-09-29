import { FC } from "react";

import { IMusic } from "../types/iMusic";
import AlbumCard from "./AlbumCard";

interface IProps {
  data: IMusic[];
  children: string;
}

const AlbumCollection: FC<IProps> = ({ data, children }) => {
  const Thumbnails = data.map((item) => (
    <AlbumCard key={item.id} item={item} />
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
export default AlbumCollection;
