import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from './componens/Layout';
import HomePage from './pages/HomePage';

function App() {
  const routes = (
    <Switch>
      <Route path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <>
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </>
  );
}

export default App;
