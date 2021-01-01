import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Gallery from "./pages/Gallery";
import axios from "axios"
import { useEffect, useState } from "react"
import About from "./pages/About";

function App() {
  useEffect(() => {
    apiCall()
  }, []);

  const [state, setstate] = useState("loading")
  
  const apiCall = async () => {
    const url = "https://trefle.io/api/v1/plants/search?token=RFn2dI7Xud0AVrGPBmpFpaDdFDnrdv_fr-dsjT8KyGA&q=succulent";

    try {
      const response = await axios.get(url);
      setstate(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">

      <Nav title="BOTANIM"/>
      <Hero />
      <Gallery items={state}/>
      <About />
    </div>
  );
}

export default App;
