import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="text-gray-600 dark:text-gray-300">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
