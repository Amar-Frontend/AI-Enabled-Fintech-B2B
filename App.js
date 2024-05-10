import React from 'react';
import './App.css';
//import { makeStyles } from '@material-ui/core';
import Header from '../src/components/Header';
import Tablediv from '../src/components/Tablediv';
import Footer from './components/Footer';
//import TableData from './components/TableData';


const App = () => {
  
  
  return (
    <div className="mainBackground">
      <Header/>
      <Tablediv/>
      <Footer/>
    
    </div>
  );
};

export default App;
