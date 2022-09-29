import { useState, useEffect } from "react";
import { getAlbums, getArtist, sortGenre } from "../scripts/methods";
import AlbumCollection from "./AlbumCollection";
import ArtistCollection from "./ArtistCollection";
import GenreCollection from "./GenreCollection";
import SideBar from "./SideBar";

export default function Home() {
  const [music, setMusic] = useState([]);
  const [genre, setGenre] = useState<[]>([]);
  const artists = getArtist(music);
  const albums = getAlbums(music);
  const genres = sortGenre(genre);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then(setMusic);
  }, [setMusic]);

  useEffect(() => {
    fetch("http://localhost:8080/genre/")
      .then((response) => response.json())
      .then(setGenre);
  }, [setGenre]);

  return (
    <>
      <SideBar />
      <div className="collections">
        <ArtistCollection data={artists}>Artists</ArtistCollection>
        <AlbumCollection data={albums}>Albums</AlbumCollection>
        <GenreCollection data={genres}>Genres</GenreCollection>
      </div>
    </>
  );
}
