import React from "react";
import "./App.css";
import Info from "./components/Info";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <h1>Weather Checker</h1>
          <Input />
          <Info />
        </div>
      </header>
    </div>
  );
}

export default App;
