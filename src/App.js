import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App">
      <SignUp />
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

// {/* <Routes>
// <Route path='/' element={<Home />} />
// <Route path='/allpost' element={<AllPost />} />
// <Route path='/createpost' element={<CreatePost />} />
// <Route path='/allpost/:id' element={<Show />} />
// <Route path='/vt' element={<Vt />} />
// </Routes> */}