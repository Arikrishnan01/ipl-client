import React, { useEffect, useState } from 'react';
import './teams.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Teams() {
  const navigate = useNavigate();
  const [teams, setTeams ] = useState([]);

  const getTeams = () => {
    fetch("https://ipl-server-kb8z.onrender.com/teams/allTeams",{
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setTeams(data.Temas))
  }
  useEffect(() => {
    getTeams()
  },[]);


  return (
    <div className='teams'>
      <div className='teamsBanner'> 
      </div>
      <div className="teamTitle">
        <h3 className='teamsBanerTitle'>IPL 2023 TEAMS</h3> 
        <button 
          className="addTeamButton"
          onClick={() => navigate("/teams/creatTeam")}
        >Add Team</button>
      </div>
      <div className='TeamsTable' class="card table-responsive text-nowrap tableContainer">

      <table class="table table-striped table-bordered table-hover table-container">
        <thead class="table-info">
          <tr>
            {/* <th scope="col">_Id</th> */}
            <th scope="col">TeamName</th>
            <th scope="col">TeamShortName</th>
            <th scope="col">TeamLogo</th>
            <th scope="col">ColorCode</th>
            <th scope="col">TotalPlayers</th>
            <th scope="col">TotalSubstitutes</th>
            <th scope="col">TotalHelpers</th>
            <th scope="col">State</th>
            <th scope="col">TeamOwner</th>
            <th scope="col">TeamCaptain</th>
            <th scope="col">TeamCoach</th>
            <th scope="col">TeamCup</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {  teams.length > 0 &&
            teams.map((teamsData) => (
              <tr key={teamsData.id}>
                {/* <td>{teamsData._id}</td> */}
                <td>{teamsData.teamName}</td>
                <td>{teamsData.teamShortName}</td>
                <td>{teamsData.teamLogo}</td>
                <td>{teamsData.colorCode}</td>
                <td>{teamsData.totalPlayers}</td>
                <td>{teamsData.totalSubstitutes}</td>
                <td>{teamsData.totalHelpers}</td>
                <td>{teamsData.state}</td>
                <td>{teamsData.teamOwner}</td>
                <td>{teamsData.teamCaptain}</td>
                <td>{teamsData.teamCoach}</td>
                <td>{teamsData.teamCup}</td>
                <td>
                  <button
                    className="teamsUpdateBtn"
                    onClick={() => navigate(`/teams/${teamsData._id}`)}  
                  >Update</button>
                </td>
                <td>
                  <button
                    className="teamsDeleteBtn"
                    onClick={() => {
                      fetch(`https://ipl-server-kb8z.onrender.com/teams/${teamsData._id}` , {
                        method: "DELETE"
                      })
                      .then((res) => alert(res.status))
                      // .then(() => navigate('/teams'))
                      navigate('/teams')
                    }}  
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}
