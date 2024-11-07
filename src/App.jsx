import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route
          path="/"
          element={<Home content="You are on the home page!" />}
        />
        <Route
          path="/new-url"
          element={<Home content="You are on the new URL!" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
