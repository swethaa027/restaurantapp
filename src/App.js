
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='Navbar' element={<Navbar/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
