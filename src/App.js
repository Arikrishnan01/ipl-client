import './App.css';
import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Players from './Pages/Team/Players';
import Teams from './Pages/Teams/Teams';
import Sidebar from './Components/Sidebar/Sidebar';
import AddTeam from './Pages/AddTeam/AddTeam';
import UpdateTeam from './Pages/UpdateTeam/UpdateTeam';

function App() {
  return (
    <div className="App">
        <Sidebar />
      <Routes>
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players/>} />
        <Route path="/teams/creatTeam" element={<AddTeam/>} />
        <Route path="/teams/:id" element={<UpdateTeam/>} />
      </Routes>
    </div>
  );
}

export default App;
