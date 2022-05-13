import React from "react";
import "./App.css"
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Intro/>
      </React.StrictMode>
    </div>
  );
}

export default App;
