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
    <>
      <h2>Results</h2>
      {filterResults?.length === 0 && result !== "" ? (
        <h2>No songs found</h2>
      ) : (
        <ul>{filterResults}</ul>
      )}
    </>
  );
};
export default SearchResults;
