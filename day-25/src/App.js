import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Hero />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
