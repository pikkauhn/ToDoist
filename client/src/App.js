import ToDoApp from './Components/ToDoApp';
import './theme.css';
import "primereact/resources/primereact.min.css";   // Core
import "primeicons/primeicons.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<ToDoApp />} />}

      <Route path="/signup" exact element={<Signup />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
