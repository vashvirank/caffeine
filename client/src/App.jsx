import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AnalyticsTracker from "./components/AnalyticsTracker";
import ReactGA from "react-ga4";

const ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
ReactGA.initialize(ID);

function App() {
  return (
    <div className="text-gray-600 dark:text-gray-300">
      <AnalyticsTracker />
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
