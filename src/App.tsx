import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Drawing from './pages/Drawing';
import Movie from './pages/Movie';
import Meme from './pages/Meme';

import Navbar from './component/Navbar';
import Calculator from './pages/calculator';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/drawing" element={<Drawing />} />
            <Route path="/meme" element={<Meme />} />
           {/* <Route path="/space" element={<Space />} /> */}
            <Route path="/calci" element={<Calculator />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
