import { useState } from "react";
import "./styles.css";

export default function App() {
  const [colors, setColors] = useState(["#ff00ff", "#abbb30", "#ff0000"]);

  return (
    <div className="App">
      <svg width="100%" height="100vh">
        <defs>
          <linearGradient id="three_color">
            <stop offset="0%" style={{ stopColor: colors[0] }} />
            <stop offset="50%" style={{ stopColor: colors[1] }} />
            <stop offset="100%" style={{ stopColor: colors[2] }} />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="100vh"
          style={{ fill: "url(#three_color)" }}
        />
      </svg>
    </div>
  );
}
