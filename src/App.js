import FetchData from "./components/FetchData";
import LocalStorageToken from "./components/LocalStorageToken";
import Hover from "./components/Hover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hover />
      <LocalStorageToken />
      <FetchData />
    </div>
  );
}

export default App;
