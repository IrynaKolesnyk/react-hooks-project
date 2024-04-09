import FetchData from "./components/FetchData";
import LocalStorageToken from "./components/LocalStorageToken";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LocalStorageToken />
      <FetchData />
    </div>
  );
}

export default App;
