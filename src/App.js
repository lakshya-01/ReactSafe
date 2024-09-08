import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact';

import About from './components/about';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import Task4 from './components/task4';
import Task5 from './components/task5';
import LastPage from './components/last';
import Reaction from './components/reaction';
import Quiz from './components/quiz'
import Precision from './components/precision.js'
import Traffic from './components/traffic.js'
import Obstacle from './components/obstacle.js'

function App() {
  return (
    
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/task1' element={<Task1 />}/>
        <Route path="/task2" element ={<Task2/>}/>  
        <Route path="/task3" element ={<Task3/>}/>
        <Route path="/task4" element ={<Task4/>}/>
        <Route path="/task5" element ={<Task5/>}/>
        <Route path="/last" element = {<LastPage/>}/>
        <Route path='/reaction' element ={<Reaction/>}/>
        <Route path='/quiz' element ={<Quiz/>}/>
        <Route path='/precision' element ={<Precision/>}/>
        <Route path='/traffic' element ={<Traffic/>}/>
        <Route path='/obstacle' element ={<Obstacle/>}/>


      </Routes>
    </>
  );
}

export default App;