import FetchData from "./components/FetchData";
import LocalStorageToken from "./components/LocalStorageToken";
import Hover from "./components/Hover";
import ViewportSize from "./components/ViewportSize";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ViewportSize />
      <Hover />
      <LocalStorageToken />
      <FetchData />
    </div>
  );
}

export default App;
