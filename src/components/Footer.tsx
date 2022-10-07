import { FC } from "react";
import { useRef } from "react";

interface iProps {
  result: string;
}

const Footer: FC<iProps> = ({ result }) => {
  console.log("Result " + result);
  return <div className="footer">{AudioPlayer(result)}</div>;
};
export const AudioPlayer = (path: string) => {
  let setState: any = useRef(null);

  console.log("Music path " + path);
  console.log("http://localhost:8080" + path);
  return (
    <>
      {path !== "" ? (
        <h2>{path}</h2>
      ) : (
        <audio
          controls
          className="songplay"
          src={"http://localhost:8080" + path}
        ></audio>
      )}
    </>
  );
};
export default Footer;
