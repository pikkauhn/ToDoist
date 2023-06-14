import ToDoApp from './Components/ToDoApp';
import './theme.css';
import "primereact/resources/primereact.min.css";   // Core
import { Route, Routes, Navigate } from 'react-router-dom';
import { setAuthToken } from './Components/Login/setAuthToken';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  };
  return (
    <Routes>
      {token && <Route path="/" exact element={<ToDoApp />} />}

      <Route path="/signup" exact element={<Signup />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
