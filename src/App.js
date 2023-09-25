import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MoviesListMainPage from "./components/index";
import WatchList from './components/watchListMovies'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MoviesListMainPage />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
