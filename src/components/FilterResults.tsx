import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import noAlbum from "../assets/picture-no-album.png";

import { IMusic } from "../types/iMusic";
import FilterCard from "./FilterCard";

const FilterResults: FC = () => {
  const { filter }: any = useParams();
  const { search }: any = useParams();
  const [data, setData] = useState<IMusic[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/?filter=" + filter + "&search=" + search)
      .then((response) => response.json())
      .then(setData);
  }, [filter, search, setData]);
  console.log(data);

  const filterResults = data.map((item, index) => (
    <FilterCard key={index} item={item} />
  ));

  return (
    <div className="filter-results">
      <div className="header">
        <img src={noAlbum} alt="" height={200} width={200} />
        <div className="content">
          <span>{filter}</span>
          <h1>{search}</h1>
        </div>
      </div>
      <ul>{filterResults}</ul>
    </div>
  );
};
export default FilterResults;
