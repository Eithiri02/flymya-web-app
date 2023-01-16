import "./App.css";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import DateTimeSelectors from "./components/DateTimeSelectors";
import WaySelectors from "./components/WaySelectors";

function App() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <WaySelectors />
      <div style={{ background: "#188ad8", paddingTop: 35, paddingBottom: 35 }}>
        <DateTimeSelectors />
      </div>
    </div>
  );
}

export default App;

