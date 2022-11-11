import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";

function App() {
  return (
    <div>
      <Header>
        <Bio />
      </Header>
    </div>
  );
}

export default App;
