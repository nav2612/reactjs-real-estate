import './App.css';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail"
import Signup_realtor from "./components/signup"
import Forgot_password from "./components/forgot_password"
import Login_realtor from "./components/login"
import Openhouse from "./components/openhouse"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Verify_phone from "./components/verify_phoneNumber";
 

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact"  component={Contact}></Route>
        <Route path="/about"  component={About}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blog/:id"  component={BlogDetail}></Route>
        <Route path="/flat/:slug"  component={FlatDetail}></Route>
        <Route path='/login_realtor' component={Login_realtor}></Route>
        <Route path='/openhouse' component={Openhouse}></Route>
        <Route path='/signup_realtor' component={Signup_realtor}></Route>
        <Route path='/forgot_password' component={Forgot_password}></Route>
        <Route path='/verify' component={Verify_phone}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
