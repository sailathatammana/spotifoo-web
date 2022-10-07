import { useState, useEffect } from "react";
import { filterTypes } from "../scripts/filterTypes";
import { getAlbums, getArtist, getGenre } from "../scripts/methods";
import AlbumCollection from "../components/AlbumCollection";
import ArtistCollection from "../components/ArtistCollection";
import GenreCollection from "../components/GenreCollection";

export default function Home() {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const artists = getArtist(music);
  const albums = getAlbums(music);
  const genres = getGenre(music);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then((music) => setMusic(music))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <p className="load">Loading...</p>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="collections">
      {music && (
        <>
          <ArtistCollection data={artists} filterType={filterTypes.artist}>
            Artists
          </ArtistCollection>
          <AlbumCollection data={albums} filterType={filterTypes.album}>
            Albums
          </AlbumCollection>
          <GenreCollection data={genres} filterType={filterTypes.genre}>
            Genres
          </GenreCollection>
        </>
      )}
    </div>
  );
}
