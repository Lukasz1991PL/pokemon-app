import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Pokemon } from './components/Pokemon';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:index/' element={<Pokemon />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
