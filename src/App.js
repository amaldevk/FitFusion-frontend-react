import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
import AddPackages from './components/AddPackages';
import ViewPackages from './components/ViewPackages';
import AddTrainerDetails from './components/AddTrainerDetails';
import ViewTrainer from './components/ViewTrainer';
   


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/registeruser' element={<RegisterPage/>}/>
        <Route path='/addpackage' element={<AddPackages/>}/>
        <Route path='/viewpackage' element={<ViewPackages/>}/>
        <Route path='/addtrainer' element={<AddTrainerDetails/>}/>
        <Route path='/viewtrainer' element={<ViewTrainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
