import { FC } from "react";

interface iProps {
  path: string;
}

const AudioPlayer: FC<iProps> = (path) => {
  return (
    <audio
      controls
      className="songplay"
      src={"http://localhost:8080" + path.path}
    ></audio>
  );
};
export default AudioPlayer;
