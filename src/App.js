import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
import RegisteredApproval from './components/RegisteredApproval';
import SearchMember from './components/SearchMember';
import AddPackages from './components/AddPackages';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/registeruser' element={<RegisterPage/>}/>
        <Route path='/approval' element={<RegisteredApproval/>}/>
        <Route path='/search' element={<SearchMember/>}/>
        <Route path='/addpackage' element={<AddPackages/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
