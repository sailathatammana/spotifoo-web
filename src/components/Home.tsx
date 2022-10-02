import { useState, useEffect } from "react";
import { filterTypes } from "../scripts/filterTypes";
import { getAlbums, getArtist, getGenre } from "../scripts/methods";
import AlbumCollection from "./AlbumCollection";
import ArtistCollection from "./ArtistCollection";
import GenreCollection from "./GenreCollection";

export default function Home() {
  const [music, setMusic] = useState([]);
  const artists = getArtist(music);
  const albums = getAlbums(music);
  const genres = getGenre(music);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then(setMusic);
  }, [setMusic]);

  return (
    <div className="collections">
      <ArtistCollection data={artists} filterType={filterTypes.artist}>
        Artists
      </ArtistCollection>
      <AlbumCollection data={albums} filterType={filterTypes.album}>
        Albums
      </AlbumCollection>
      <GenreCollection data={genres} filterType={filterTypes.genre}>
        Genres
      </GenreCollection>
    </div>
  );
}
