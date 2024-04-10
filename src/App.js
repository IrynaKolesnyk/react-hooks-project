import FetchData from "./components/FetchData";
import LocalStorageToken from "./components/LocalStorageToken";
import Hover from "./components/Hover";
import ViewportSize from "./components/ViewportSize";
import ScrollPosition from "./components/ScrollPosition";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />
      <ScrollPosition />
      <ViewportSize />
      <Hover />
      <LocalStorageToken />
      <FetchData />
    </div>
  );
}

export default App;
