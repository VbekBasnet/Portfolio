import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <SocialMedia />
    </div>
  );
}

export default App;
