import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPackages from './components/AddPackages';
import ViewTrainer from './components/ViewTrainer';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPackages/>}/>
        <Route path='/viewtrainers' element={<ViewTrainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
