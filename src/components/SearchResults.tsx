import { FC, useEffect, useState } from "react";
import { IMusic } from "../types/iMusic";
import ResultCard from "./ResultCard";

interface IProps {
  result: string;
}

const SearchResults: FC<IProps> = ({ result }) => {
  const [data, setData] = useState<IMusic[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let filterResults: any = [];

  useEffect(() => {
    fetch(`http://localhost:8080/music/?search=${result}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [result, setData]);

  filterResults = data.map((item, index) => (
    <ResultCard key={index} item={item} />
  ));

  if (loading) return <h1 className="search-load">Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="search-results">
      {data && (
        <>
          {filterResults?.length === 0 ? (
            <p>No songs found</p>
          ) : (
            <ul>{filterResults}</ul>
          )}
        </>
      )}
    </div>
  );
};
export default SearchResults;
