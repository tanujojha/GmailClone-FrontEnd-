import { useContext, useEffect} from 'react';
import './App.css';
import { Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import EmailBoard from './pages/emailBoard/emailBoard';
import AppBarDrawer from './components/appBarDrawer/appBarDrawer';
import InboxBoard from './pages/inboxBoard/inboxBoard';
import {GUserContext}  from './context/context';
import PrivateRoute from "./components/privateRoute/privateRoute"


function App() {

  const gcontext = useContext(GUserContext);
  const {Guser, getGUser} = gcontext;
  
  useEffect(()=>{
    getGUser()
    
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={!Guser ? <Login /> : <Navigate to="/dashboard/inbox"/>}/>
        <Route path='register' element={<Register />}/>
        <Route element={<PrivateRoute Guser={Guser}/>}>
          <Route element={<AppBarDrawer />}>
            <Route path='dashboard/inbox' element={<InboxBoard/>}/>
            <Route path="dashboard/inbox/:id"  element={<EmailBoard/>}/>
          </Route>
        </Route>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;

