import './App.css';


import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

//pages


function App() {

 const [user, setUser] = useState(undefined)
 const {auth} = useAuthentication()

 const loadingUser = user === undefined

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
 }, [auth]);

 if (loadingUser) {
     return <p>Carregando...</p>;
 }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
            <div className="container">
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Search' element={<Search/>}/>
              <Route path='/posts/:id' element={<Post/>}/>
              
              
              <Route path='/Login' element={!user ? <Login/> : <Navigate to="/"/> }/>
              <Route path='/Register' element={!user ? <Register/> : <Navigate to="/"/>}/>
              <Route path='/post/Edit' element={!user ? <EditPost/> : <Navigate to="/"/> }/>
              <Route path='/post/Create' element={user ? <CreatePost/> : <Navigate to="/login"/>}/>
              <Route path='/Dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
