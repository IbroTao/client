import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post';
import Header from './Header';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage  from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element = {<HomePage/>} /> 
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/register'} element={<RegisterPage/>}/>
        </Route>
      </Routes>
  );
}
export default App
