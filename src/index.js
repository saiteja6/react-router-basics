import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => {
  return <h2>Home Page</h2>;
};

const About = () => {
  return <h2>About Page</h2>;
};

const Contact = () => {
  return <h2>Contact Page</h2>;
};

const NotFound = () => {
  return <h2>Page Not found.</h2>;
};  

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
<App />,
  document.getElementById('root')
);

