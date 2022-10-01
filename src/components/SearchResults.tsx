import { FC, useEffect, useState } from "react";
import { sortList } from "../scripts/methods";
import { IMusic } from "../types/iMusic";

interface IProps {
  result: string;
}

const SearchResults: FC<IProps> = ({ result }) => {
  const [data, setData] = useState<IMusic[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/music/?search=" + result)
      .then((response) => response.json())
      .then(setData);
  }, [result, setData]);

  console.log(data);
  return (
    <>
      <h2>{result}</h2>
    </>
  );
};
export default SearchResults;
