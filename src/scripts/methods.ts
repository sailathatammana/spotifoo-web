import { IMusic } from "../types/iMusic";

export function getArtist(data: IMusic[]) {
  const unique: IMusic[] = [];

  data.map((item: IMusic) =>
    unique.filter((a) => a.artist === item.artist).length > 0
      ? null
      : unique.push(item)
  );
  unique.sort((a, b) => {
    return a.artist.localeCompare(b.artist);
  });
  return unique;
}

export function getAlbums(data: IMusic[]) {
  const unique: IMusic[] = [];

  data.map((item: IMusic) =>
    unique.filter((a) => a.album === item.album).length > 0
      ? null
      : unique.push(item)
  );
  unique.sort((a, b) => {
    return a.album.localeCompare(b.album);
  });
  return unique;
}

export function getGenre(data: IMusic[]) {
  const unique: IMusic[] = [];

  data.map((item: IMusic) =>
    unique.filter((a) => a.genre === item.genre).length > 0
      ? null
      : unique.push(item)
  );
  unique.sort((a, b) => {
    return a.artist.localeCompare(b.genre);
  });
  return unique;
}
