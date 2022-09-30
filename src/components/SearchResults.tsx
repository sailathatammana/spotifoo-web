import { FC } from "react";

interface IProps {
  data: string;
}

const SearchResults: FC<IProps> = ({ data }) => {
  return <h2>{data}</h2>;
};
export default SearchResults;
