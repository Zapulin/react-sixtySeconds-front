import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import User from './Pages/Profile'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/feed' element={<Feed/>} />
        <Route path='/profile/:id' element={<User/>} />
        <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
