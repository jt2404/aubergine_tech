import logo from './logo.svg';
import './App.css';
import ListUser from './components/listuser';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import User from './components/user';

function App() {
    
  return (
    <>
        {/* <Router>
            <Routes>
            <Route element={
                <Outlet/>
            }>
                <Route path='/' element={<ListUser/>}/>
                <Route path='/user' element={<User/>} />
            </Route>
            </Routes>

        </Router> */}
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ListUser/>} />
                <Route exact path='/user' element={<User/>} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
