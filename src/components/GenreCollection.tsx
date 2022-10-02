import { FC } from "react";
import { filterTypes } from "../scripts/filterTypes";

import { IMusic } from "../types/iMusic";
import GenreCard from "./GenreCard";

interface IProps {
  data: IMusic[];
  children: string;
  filterType: filterTypes;
}

const GenreCollection: FC<IProps> = ({ data, filterType, children }) => {
  const Thumbnails = data.map((item, index) => (
    <GenreCard key={index} item={item} filterType={filterType} />
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
export default GenreCollection;
