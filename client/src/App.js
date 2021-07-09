import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import { VideoSearch } from "./components/VideoSearch";

function App() {
  return (
    <div className="App">
      <VideoSearch />
      <VideoList />
    </div>
  );
}

export default App;
