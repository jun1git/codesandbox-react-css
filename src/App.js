import { CssModules } from "./compornents/CssModules";
import { Emotion } from "./compornents/Emotion";
import { InlineStyle } from "./compornents/InlineStyle";
import { StyledCompornents } from "./compornents/StyledCompornets";
import { StyledJSX } from "./compornents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
      <StyledCompornents />
      <Emotion />
    </div>
  );
}
