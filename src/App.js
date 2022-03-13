import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container';
import Home from './components/pages/Home'
import DestinationMoon from './components/pages/DestinationMoon'
import DestinationMars from './components/pages/DestinationMars'
import DestinationEuropa from './components/pages/DestinationEuropa'
import DestinationTitan from './components/pages/DestinationTitan'
import CrewDoug from './components/pages/CrewDoug'
import CrewMark from './components/pages/CrewMark'
import CrewVictor from './components/pages/CrewVictor'
import CrewNou from './components/pages/CrewNou'
import TechnologyVehicle from './components/pages/TechnologyVehicle'
import TechnologySpaceport from './components/pages/TechnologySpaceport'
import TechnologySpaceCapsule from './components/pages/TechnologySpaceCapsule'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/DestinationMoon" element={<DestinationMoon />} />
          <Route exact path="/DestinationMars" element={<DestinationMars />} />
          <Route exact path="/DestinationEuropa" element={<DestinationEuropa />} />
          <Route exact path="/DestinationTitan" element={<DestinationTitan />} />
          <Route exact path="/CrewDoug" element={<CrewDoug />} />
          <Route exact path="/CrewMark" element={<CrewMark />} />
          <Route exact path="/CrewVictor" element={<CrewVictor />} />
          <Route exact path="/CrewNou" element={<CrewNou />} />
          <Route exact path="/TechnologyVehicle" element={<TechnologyVehicle />} />
          <Route exact path="/TechnologySpaceport" element={<TechnologySpaceport />} />
          <Route exact path="/TechnologySpaceCapsule" element={<TechnologySpaceCapsule />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
