import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Doctors from './Pages/Doctors/Doctors';
import Department from './Pages/Department/Department';
import Appointment from './Pages/Appointment/Appointment';
import DoctorDetails from './Pages/Doctors/DoctorDetails/DoctorDetails';
import Footer from './Pages/Footer/Footer';
import DepartmentDetails from './Pages/Department/DepartmentDetails/DepartmentDetails';
import AboutUs from './Pages/AboutUs/AboutUs';
import Navbar from './Pages/Navbar/Navbar';
import ForgatePass from './Pages/Login/ForgatePass/ForgatePass';
import AfterResetPass from './Pages/Login/ForgatePass/AfterResetPass';
import ContactUs from './Pages/Contact Us/ContactUs';

function App() {
  return (
    <div className="App font-sans	">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path='/doctors/:doctorId'>
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route exact path="/departments">
              <Department></Department>
            </Route>
            <PrivateRoute exact path='/departments/:departmentrId'>
              <DepartmentDetails></DepartmentDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/forgatePass">
              <ForgatePass></ForgatePass>
            </Route>
            <Route exact path="/afterResetPass">
              <AfterResetPass></AfterResetPass>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
