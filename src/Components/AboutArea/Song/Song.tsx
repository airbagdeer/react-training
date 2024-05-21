import "./Song.css";

import audioSource from "../../../assets/audio/fade-into-you.mp3";
import { useRef } from "react";

export function Song(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement>();

  function play() {
    audioRef.current.play();
  }

  return (
    <div className="Song">
      <audio src={audioSource} ref={audioRef} />

      <button onClick={play}>▶</button>
      <button onClick={() => audioRef.current.pause()}>⏸</button>
      <button onClick={() => audioRef.current.load()}>⏹</button>
    </div>
  );
}
