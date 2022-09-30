import { FC, useEffect, useState } from "react";
import { sortList } from "../scripts/methods";

interface IProps {
  result: string;
}

const SearchResults: FC<IProps> = ({ result }) => {
  const [data, setData] = useState([]);
  const list = sortList(data);
  useEffect(() => {
    fetch("http://localhost:8080/music?search=" + result)
      .then((response) => response.json())
      // .catch((error) => console.log(error))
      .then(setData);
  }, [result, setData]);
  console.log(list);
  return (
    <>
      <h2>{result}</h2>
      {list}
    </>
  );
};
export default SearchResults;
