import './App.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Login from './routes/login/Login';
import Signup from './routes/signup/Signup';

// Student Routes
import StudentDashboard from './routes/student/student-dashboard/StudentDashboard';
import StudentProfile from './routes/student/profile/StudentProfile';

function App() {
  return (
   <BrowserRouter>
      <Routes >
        <Route path='login' element = {<Login />}/>
        <Route path='signup' element = {<Signup />}/>

        {/* Student Routes */}

        <Route path = 'student/dashboard' element = {<StudentDashboard />}/>

        <Route path = 'student/profile' element = {<StudentProfile />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
