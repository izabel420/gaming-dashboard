import React from "react";
import "./Profile.css";
import Home from "./Pages/Home";
import Milestones from "./Pages/Milestones";
import GameAnalytics from "./Pages/GameAnalytics";
import Games from "./Pages/Games";
import Others from "./Pages/Others";

function App() {
  return (
    <div className="app">
      <Home />
      <Milestones />
      <GameAnalytics />
      <Games />
      <Others /> {/* everything shows on the page */}
    </div>
  );
}

export default App;
