import { FC } from "react";
import { filterTypes } from "../scripts/filterTypes";

import { IMusic } from "../types/iMusic";
import ArtistCard from "./ArtistCard";

interface IProps {
  data: IMusic[];
  children: string;
  filterType: filterTypes;
}

const ArtistCollection: FC<IProps> = ({ data, filterType, children }) => {
  const Thumbnails = data.map((item) => (
    <ArtistCard key={item.id} item={item} filterType={filterType} />
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
