import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function App() {

  const aboutText = `Cześć, mam na imię Kacper, jestem studentem informatyki i od 1,5 roku rozwijam swoje umiejętności w dziedzinie web developmentu. Specjalizuję się w tworzeniu responsywnych stron internetowych i aplikacji webowych, korzystając z technologii takich jak HTML, CSS oraz JavaScript z frameworkiem React. Mam również doświadczenie w pracy z backendem, używając Node.js i Express, oraz w bazach danych MongoDB. Aktualnie uczę się TypeScripta oraz zerkam na relacyjne bazy danych SQL.`;


  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Main />
      </div>
      <About text={aboutText}/>
      <Projects />
    </div>
  )
};