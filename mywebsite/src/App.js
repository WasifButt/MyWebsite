import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Layout } from './components/Layout'
import { Home } from './Home'; 
import { About } from './About'; 
import { Experience } from './Experience';

function App() {
  return (
    <React.Fragment>
      <Layout>
        {/* <section id = "home">
          <Home />
        </section>
        <section id = "about">
          <About />
        </section>
        <section id = "experience">
          <Experience />
        </section> */}

        {/* <Router>
          <Switch>
            <section id ="home">
              <Route exact path = "/" component  = {Home} />
              <Home />
            </section>
            <section id ="about">
              <Route exact path = "/About" component  = {About} />
              <About />
            </section>
            {/*<Route exact path = "/Experience" component  = {Experience} />
            <Route exact path = "/Skills" component  = {Skills} />
            <Route exact path = "/Contact" component  = {Contact} /> 
      <Route component  = {404} />
          </Switch>
        </Router> */}
      </Layout>
    </React.Fragment>
  );
}

export default App;
