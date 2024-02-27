import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewTrainers from './components/ViewTrainers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/viewtrainers' element={<ViewTrainers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
