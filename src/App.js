import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPackages from './components/AddPackages';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPackages/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
