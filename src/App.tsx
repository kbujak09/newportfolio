import { useEffect } from "react";

import Header from "./components/Hero/Header/Header";
import Main from "./components/Hero/Main/Main";
import Projects from './components/Projects/Projects';
import Hero from "./components/Hero/Hero";

export default function App() {

  useEffect(() => {
      const initialHeight = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${initialHeight * 0.01}px`);
    }, []);

  return (
    <div className="App">
      <Hero>
        <Header />
        <Main />
      </Hero>
      <Projects />
    </div>
  )
};