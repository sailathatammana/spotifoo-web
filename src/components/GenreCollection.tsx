import { FC } from "react";

import GenreCard from "./GenreCard";

interface IProps {
  data: [];
  children: string;
}

const GenreCollection: FC<IProps> = ({ data, children }) => {
  const Thumbnails = data.map((item) => <GenreCard item={item} />);
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
