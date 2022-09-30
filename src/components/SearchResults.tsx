import { FC, useEffect, useState } from "react";
import { sortList } from "../scripts/methods";
import Api from "../api/Api";

interface IProps {
  result: string;
}

const SearchResults: FC<IProps> = ({ result }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.get("/music?search=" + result).then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <h2>{result}</h2>
    </>
  );
};
export default SearchResults;
