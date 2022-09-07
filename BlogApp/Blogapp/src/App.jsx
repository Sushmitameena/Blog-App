import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Header from "../src/components/Header";
import Create from "./pages/Create"
const App = () => {
  return (
    <div>
       <Header />
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create' exact component={Create} />
        <Route path='/Users' exact component={Create} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
      </div>
    </div>
  );
};

export default App;
