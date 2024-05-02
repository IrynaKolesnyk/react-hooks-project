import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import FetchData from './components/FetchData';
import LocalStorageToken from './components/LocalStorageToken';
import Hover from './components/Hover';
import ViewportSize from './components/ViewportSize';
import ScrollPosition from './components/ScrollPosition';
import Toggle from './components/Toggle';
import Signin from './components/forms/Signin';
import Signup from './components/forms/Signup';
import './App.css';

function App() {
  const onSubmit = inputValues => {
    console.log('submit');
  };
  return (
    <div className="App">
      <ol>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/fetch-data">Fetch data</Link>
        </li>
        <li>
          <Link to="/toggle">Toggle</Link>
        </li>
        <li>
          <Link to="/scroll-position">
            Scroll position
          </Link>
        </li>
        <li>
          <Link to="/viewport-size">
            Viewport size
          </Link>
        </li>
        <li>
          <Link to="/hover">Hover</Link>
        </li>
        <li>
          <Link to="/local-storage-token">
            Local storage token
          </Link>
        </li>
      </ol>
      <Routes>
        <Route
          path="/signin"
          element={<Signin onSubmit={onSubmit} />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/fetch-data"
          element={<FetchData />}
        />
        <Route
          path="/toggle"
          element={<Toggle />}
        />
        <Route
          path="/scroll-position"
          element={<ScrollPosition />}
        />
        <Route
          path="/viewport-size"
          element={<ViewportSize />}
        />
        <Route
          path="/hover"
          element={<Hover />}
        />
        <Route
          path="/local-storage-token"
          element={<LocalStorageToken />}
        />
      </Routes>
    </div>
  );
}

export default App;
