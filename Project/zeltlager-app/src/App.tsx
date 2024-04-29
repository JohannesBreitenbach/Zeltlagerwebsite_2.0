import Alert from "./components/Alert";
import HeroSection from "./components/herosection/HeroSection";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <MyNavbar />
      <HeroSection />
    </div>
  );
}

export default App;
