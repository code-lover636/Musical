import './styles/app.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './home';
import Discover from './discover';

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/discover' element={<Discover/>} />
                </Routes>
        </BrowserRouter>
    );
}


export default App;