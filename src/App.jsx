import './App.css';
import Homepage from './pages/Homepage';
import FirstTimes from './pages/FirstTimes';
import FuturePlans from './pages/FuturePlans';
import Moments from './pages/Moments';
import Countdowns from './pages/Countdowns';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/firsttimes" element={<FirstTimes/>}/>
        <Route path="/futureplans" element={<FuturePlans/>}/>
        <Route path="/countdowns" element={<Countdowns/>}/>
        <Route path="/moments" element={<Moments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
