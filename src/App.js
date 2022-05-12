import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Pages
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feed' element={<Feed/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
