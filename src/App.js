import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Sports from './components/pages/Sports';
import Mindful from './components/pages/Mindful';
import Food from './components/pages/Food';

function App() {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/homepage' element={<Homepage />} />
                    <Route path='/sports' element={<Sports />} />
                    <Route path='/food' element={<Food />} />
                    <Route path='/mindful' element={<Mindful />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
