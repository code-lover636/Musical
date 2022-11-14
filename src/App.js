import {React} from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home';
import Discover from './discover';

function App(){
    return(
        <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/discover' element={<Discover/>} />
        </Routes>
        </Router>
    );
}


export default App;