import { FC, useEffect, useState } from "react";
import { IMusic } from "../types/iMusic";
import ResultCard from "./ResultCard";

interface IProps {
  result: string;
}

const SearchResults: FC<IProps> = ({ result }) => {
  const [data, setData] = useState<IMusic[]>([]);
  let filterResults: any = [];

  useEffect(() => {
    fetch("http://localhost:8080/music/?search=" + result)
      .then((response) => response.json())
      .then(setData);
  }, [result, setData]);

  if (result !== "") {
    filterResults = data.map((item, index) => (
      <ResultCard key={index} item={item} />
    ));
  }

  return (
    <div className="search-results">
      <h2>Results</h2>
      {filterResults?.length === 0 && result !== "" ? (
        <p>No songs found</p>
      ) : (
        <ul>{filterResults}</ul>
      )}
    </div>
  );
};
export default SearchResults;
