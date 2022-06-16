/**
// Importing BrowserRouter but renaming it to Router for clarity
 * BrowserRouter is a component that renders a <Router> element.
  * The <Router> element is a component that renders a <Route> element.
  * The <Route> element is a component that renders a <Switch> element.
  * The <Switch> element is a component that renders a <Route> element for each route in the route configuration.
  * The <Route> element is a component that renders a <Route> element for each route in the route configuration.
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Dogs from './pages/navigation-bar/Dogs';
import Cats from './pages/navigation-bar/Cats';
import Sheep from './pages/navigation-bar/Sheep';
import Goats from './pages/navigation-bar/Goats';

function App() {
  return (
    <Router>
      {/* Adding the navigation bar component. */}
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Dogs/>} />
        <Route path="/cats" element={<Cats/>} />
        <Route path="/sheep" element={<Sheep/>} />
        <Route path="/goats" element={<Goats/>} />
      </Routes>

    </Router>
  );
}

export default App;
