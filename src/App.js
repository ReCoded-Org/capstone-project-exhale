import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import {
//   HOME_ROUTE,
//   DOCTORS_ROUTE,
//   ABOUT_ROUTE,
//   CONTACT_ROUTE,
//   SELF_ASSESSMENT_ROUTE,
//   ARTICLES_BASE_ROUTE,
//   ARTICLE_ROUTE,
//   LOGIN_ROUTE,
//   SIGNUP_ROUTE,
//   NOT_FOUND_ROUTE,
// } from './routes';
// import Home from './containers/Home';
// import Login from './containers/Login';
// import Signup from './containers/Signup';
// import Doctors from './containers/Doctors';
// import Articles from './containers/Articles';
// import Article from './containers/Articles/Article';
// import Contact from './containers/Contact';
// import About from './containers/About';
// import SelfAssessment from './containers/SelfAssessment';
// import Navbar from './components/Navbar';
// import NotFound from './components/NotFound';
import RegisterForm from './components/RegisterForm'
function App() {
  return ( 
    <div><RegisterForm /></div>
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route path={LOGIN_ROUTE} component={Login} />
    //     <Route path={SIGNUP_ROUTE} component={Signup} />
    //     <Route path={DOCTORS_ROUTE} component={Doctors} />
    //     <Route path={ARTICLE_ROUTE} component={Article} />
    //     <Route path={ARTICLES_BASE_ROUTE} component={Articles} />
    //     <Route path={CONTACT_ROUTE} component={Contact} />
    //     <Route path={ABOUT_ROUTE} component={About} />
    //     <Route path={SELF_ASSESSMENT_ROUTE} component={SelfAssessment} />
    //     <Route path={NOT_FOUND_ROUTE} component={NotFound} />
    //     <Route exact path={HOME_ROUTE} component={Home} />
    //     <Redirect to={NOT_FOUND_ROUTE} />
    //   </Switch>
    // </Router>
  );
}
export default App;