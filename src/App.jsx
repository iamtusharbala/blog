import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
