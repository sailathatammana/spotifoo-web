import { useState, useEffect } from "react";
import { getAlbums, getArtist, getGenre } from "../scripts/methods";
import SideBar from "./SideBar";

export default function Home() {
  const [music, setMusic] = useState([]);
  getArtist(music);
  getAlbums(music);
  getGenre(music);

  useEffect(() => {
    fetch("http://localhost:8080/music/")
      .then((response) => response.json())
      .then(setMusic);
  }, [setMusic]);

  return <SideBar />;
}
