import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterPage from './components/RegisterPage';
import RegisteredApproval from './components/RegisteredApproval';
import SearchMember from './components/SearchMember';
import AddPackages from './components/AddPackages';
import UserHomepage from './components/UserHomepage';
import ViewPackages from './components/ViewPackages';
import ViewTrainer from './components/ViewTrainer';
import AddTrainerDetails from './components/AddTrainerDetails';
import AdminHomepage from './components/AdminHomepage';
import NavbarAdmin from './components/NavbarAdmin';
import AboutPage from './components/AboutPage';
import MyProfile from './components/MyProfile';
import ContactPage from './components/ContactPage';
import MyPackage from './components/MyPackages';



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
        <Route path='/userhome' element={<UserHomepage/>}/>
        <Route path='/addpackage' element={<AddPackages/>}/>
        <Route path='/addtrainer' element={<AddTrainerDetails/>}/>
        <Route path='/viewpackage' element={<ViewPackages/>}/>
        <Route path='/viewtrainer' element={<ViewTrainer/>}/>
        <Route path='/searchmember' element={<SearchMember/>}/>
        <Route path='/adminhome' element={<AdminHomepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/mypackage' element={<MyPackage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
