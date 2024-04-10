import FetchData from "./components/FetchData";
import LocalStorageToken from "./components/LocalStorageToken";
import Hover from "./components/Hover";
import ViewportSize from "./components/ViewportSize";
import ScrollPosition from "./components/ScrollPosition";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollPosition />
      <ViewportSize />
      <Hover />
      <LocalStorageToken />
      <FetchData />
    </div>
  );
}

export default App;
