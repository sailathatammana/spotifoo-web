import { FC } from "react";

interface iProps {
  path: string;
}

const AudioPlayer: FC<iProps> = (path) => {
  return (
    <audio controls className="songplay">
      <source src={"http://localhost:8080/" + path.path} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};
export default AudioPlayer;
