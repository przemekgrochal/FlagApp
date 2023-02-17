import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Country from './components/Country';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/country/:country"
          element={<Country />}
        />
        <Route
          path={'*'}
          element={<div>Page Not Found <a href="/">Go to home</a></div>}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;