// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './comp/Header/Header';
import Navbar from './comp/Navbar/Navbar';
import Content from './comp/ContentProfile/Content';
import Dialogs from './comp/Dialogs/Dialogs';
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <div className='app_wrapper_cont'>
          <Route path="/profile" render={ () => <Content state={props.state.profile} addPost={props.addPost} />} />
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogs} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
