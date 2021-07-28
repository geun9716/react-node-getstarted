import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Login, Main} from './routes';
import "antd/dist/antd.css";
import './App.css';
import Cover from './components/cover';




function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/main" component={Main}/>
    </>
  );
}

export default App;
