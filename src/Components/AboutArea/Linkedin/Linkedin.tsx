import { useContext } from "react";
import { MiniThemeContext } from "../../../Utils/MiniTheme";
import "./Linkedin.css";

export function Linkedin(): JSX.Element {
  const theme = useContext(MiniThemeContext);

  return (
    <div className="Linkedin" style={theme}>
      <p>Linked page: https://www.linkdedin.com/northwind</p>
    </div>
  );
}
