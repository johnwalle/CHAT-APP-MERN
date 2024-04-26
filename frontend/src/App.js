import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Login />}/>
        <Route path='/signup'  element={<Register />}/>
        <Route path='/home'  element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
