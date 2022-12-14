import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noAlbum from "../assets/picture-no-album.png";
import { IMusic } from "../types/iMusic";
import FilterCard from "../components/FilterCard";
import { imageOnErrorHandler } from "../scripts/methods";

export default function FilterResults() {
  const { filter }: any = useParams();
  const { search }: any = useParams();
  const [data, setData] = useState<IMusic[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let clipArt: any = "";

  useEffect(() => {
    fetch(`http://localhost:8080/music/?filter=${filter}&search=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [filter, search, setData]);

  const filterResults = data.map((item, index) => (
    <FilterCard key={index} item={item} index={index} />
  ));

  if (data.length !== 0) {
    clipArt = filterResults[0].props.item.pathToAlbum;
  }

  if (loading) return <p className="load">Loading...</p>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="filter-results">
      {data && (
        <>
          <div className="header">
            {data.length !== 0 && filter !== "genre" ? (
              <img
                src={"http://localhost:8080" + clipArt}
                onError={imageOnErrorHandler}
                alt=""
              />
            ) : (
              <img src={noAlbum} alt="" />
            )}
            <div className="content">
              <span>{filter}</span>
              <h1>{search}</h1>
            </div>
          </div>
          <div className="table-format">
            <div className="table-id">
              <p className="id">#</p>
            </div>
            <div className="table-title">
              <p className="title">Tittle</p>
            </div>
          </div>
          <hr />
          <ul>{filterResults}</ul>
        </>
      )}
    </div>
  );
}
