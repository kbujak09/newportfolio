import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const initialHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${initialHeight * 0.01}px`);
  }, []);

  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Main />
      </div>
    </div>
  )
};