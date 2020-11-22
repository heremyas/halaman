import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;
