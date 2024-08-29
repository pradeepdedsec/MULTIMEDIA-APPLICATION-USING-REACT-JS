import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OtpVerify from './pages/OtpVerify';
import Welcome from './pages/Welcome';
import ForgotOtpSend from './pages/ForgotOtpSend';
import ForgotOtpVerify from './pages/ForgotOtpVerify';
import NewPassword from './pages/NewPassword';
import PasswordUpdated from './pages/PasswordUpdated';
import MusicHome from './pages/MusicHome';
import Music from './pages/Music';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/ >
        <Route path="/Home" element={<Home/>}/ >
        <Route path="/Login" element={<Login/>}/ >
        <Route path="/SignUp" element={<SignUp/>}/ >
        <Route path="/OtpVerify" element={<OtpVerify/>}/ >
        <Route path="/Welcome" element={<Welcome/>}/ >
        <Route path="/ForgotOtpSend" element={<ForgotOtpSend/>}/ >
        <Route path="/ForgotOtpVerify" element={<ForgotOtpVerify/>}/ >
        <Route path="/NewPassword" element={<NewPassword/>}/ >
        <Route path="/PasswordUpdated" element={<PasswordUpdated/>}/ >
        
        <Route path="/MusicHome" element={<MusicHome/>}/ >
        <Route path="/Music" element={<Music/>}/ >
        <Route path="/Music/:tname" element={<Music/>}/ >
      </Routes>
    </div>
  );
}

export default App;
