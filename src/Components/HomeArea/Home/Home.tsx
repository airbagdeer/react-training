import { Linkedin } from "../../AboutArea/Linkedin/Linkedin";
import { Song } from "../../AboutArea/Song/Song";
import { TestAuth } from "../TestAuth/TestAuth";
import "./Home.css";

export function Home(): JSX.Element {
  return (
    <div className="Home">
      {/* 😒 <TestAuth></TestAuth> */}
      <Linkedin></Linkedin>
      <Song></Song>
    </div>
  );
}
