import ToDoApp from './Components/ToDoApp';
import './theme.css';
import "primereact/resources/primereact.min.css";   // Core
import "primeicons/primeicons.css";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/LoginPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/LoginPortal" exact element={<Login />} />
          <Route path="/ToDo" exact element={<ToDoApp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
