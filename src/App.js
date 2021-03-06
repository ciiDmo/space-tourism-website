import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import styles from "./App.module.css";

import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Destination" element={<Destination />} />
            <Route exact path="/Crew" element={<Crew />} />
            <Route exact path="/Technology" element={<Technology />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
