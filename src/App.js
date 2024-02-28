import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchMember from './components/SearchMember';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<SearchMember/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
