import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import AllPost from './pages/AllPost';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Show from './pages/Show';
import Vt from './pages/Vt';

export default function App() {
  return (
    <div className="App">
      <SignUp />
      <Header />
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allpost' element={<AllPost />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/allpost/:id' element={<Show />} />
          <Route path='/vt' element={<Vt />} />
        </Routes>
      <Footer />
    </div>
  );
}