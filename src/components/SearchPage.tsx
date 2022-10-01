import { FormEvent, useState } from "react";
import search from "../assets/icons/search.svg";
import SearchResults from "./SearchResults";

export default function Searchpage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string>("");

  function onSearch(event: FormEvent<HTMLFormElement>): string {
    setResult(query);
    event.preventDefault();
    return result;
  }
  const searchResults = <SearchResults result={result} />;

  return (
    <div className="search-page">
      <h2>Search</h2>
      <form onSubmit={(event) => onSearch(event)}>
        <div className="search">
          <button>
            <img src={search} alt="search" />
          </button>
          <input
            type="text"
            placeholder="welcome"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </form>
      {searchResults}
    </div>
  );
}
