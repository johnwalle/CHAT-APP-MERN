import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={user ? <Navigate to='/' /> : <Register />} />
      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </Router>
  );
}

export default App;
