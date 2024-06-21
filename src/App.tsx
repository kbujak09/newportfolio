import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";

export default function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Main />
      </div>
      <About />
    </div>
  )
};