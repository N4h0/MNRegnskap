import { Link } from "react-router-dom";
import React from "react";

const Navigation = ({ children }) => {
  const [theme, setTheme] = React.useState("light"); 

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <section>
        <h2>Color theme</h2>
        <label>
          <input
            type="radio"
            name="color-theme"
            value="dark"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
          Dark
        </label>
        <label>
          <input
            type="radio"
            name="color-theme"
            value="light"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="color-theme"
            value="system"
            checked={theme === "system"}
            onChange={() => setTheme("system")}
          />
          System
        </label>
      </section>
      {children}
    </nav>
  );
};

export default Navigation;