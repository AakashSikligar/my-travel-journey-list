//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./seperate";

function App() {
  const cardItem = data.map(function (item) {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <div className="container">
        <Navbar />
        {cardItem}
      </div>
    </>
  );
}

export default App;
