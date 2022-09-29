import { useState, useEffect } from "react";
import { getAlbums, getArtist, getGenre } from "../scripts/methods";
import AlbumCollection from "./AlbumCollection";
import ArtistCollection from "./ArtistCollection";
import GenreCollection from "./GenreCollection";
import SideBar from "./SideBar";

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
    <>
      <SideBar />
      <div className="collections">
        <ArtistCollection data={artists}>Artits</ArtistCollection>
        <AlbumCollection data={albums}>Albums</AlbumCollection>
        <GenreCollection data={genres}>Genres</GenreCollection>
      </div>
    </>
  );
}
