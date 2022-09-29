import { FormEvent, useState } from "react";
import search from "../assets/icons/search.svg";

export default function Searchpage() {
  const [query, setQuery] = useState("");

  function onSearch(event: FormEvent<HTMLFormElement>): void {
    const result: String = `${query} `;
    event.preventDefault();
    alert(result);
    setQuery("");
  }

  return (
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
  );
}
