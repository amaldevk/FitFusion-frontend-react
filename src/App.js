import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPackages from './components/AddPackages';
import AddTrainer from './components/AddTrainer';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPackages/>}/>
        <Route path='/addtrainers' element={<AddTrainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
