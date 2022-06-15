import logo from './logo.svg';
/**
// Importing BrowserRouter but renaming it to Router for clarity
 * BrowserRouter is a component that renders a <Router> element.
  * The <Router> element is a component that renders a <Route> element.
  * The <Route> element is a component that renders a <Switch> element.
  * The <Switch> element is a component that renders a <Route> element for each route in the route configuration.
  * The <Route> element is a component that renders a <Route> element for each route in the route configuration.
 */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Dogs from './pages/navigation-bar/Dogs';
import Cats from './pages/navigation-bar/Cats';
import Sheep from './pages/navigation-bar/Sheep';
import Goats from './pages/navigation-bar/Goats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
