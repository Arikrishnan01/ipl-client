import React,{ useState, useEffect} from 'react';
import './team.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Players() {

  const navigate = useNavigate();
  const [players, setPlayers ] = useState([]);

  const getTeams = () => {
    fetch("https://ipl-server-kb8z.onrender.com/players/allPlayers",{
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => 
    
      {
        console.log(data)
        setPlayers(data.Players)
      }
      
      ) 
    
  }
  useEffect(() => {
    getTeams()
  },[]);

  return (
    <div className='teams PlayersContainer'>
      <div className='teamsBanner'> 
      </div>
      <h3 className='teamsBanerTitle'>IPL 2023 PLAYERS</h3> 
      <div className='TeamsTable' class="card table-responsive text-nowrap tableContainer">

      <table class="table table-striped table-bordered table-hover table-container">
        <thead class="table-info">
          <tr>
            <th scope="col">PlayerName</th>
            <th scope="col">JerseyNumber</th>
            <th scope="col">JerseySize</th>
            <th scope="col">TeamPlaying</th>
            <th scope="col">PrimarySkill</th>
            <th scope="col">ActualSkills</th>
            <th scope="col">BattingDetails</th>
            {/* <th scope="col">Update</th> */}
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {  players.length > 0 &&
            players.map((playersData) => (
              <tr key={playersData.id}>
                <td>{playersData.playerName}</td>
                <td>{playersData.jerseyNumber}</td>
                <td>{playersData.jerseySize}</td>
                <td>{playersData.teamPlaying}</td>
                <td>{playersData.primarySkill}</td>
                <td>
                  <p>{playersData.actualSkills[0]}</p>
                  <p>{playersData.actualSkills[1]}</p>
                  <p>{playersData.actualSkills[2]}</p>
                </td>
                <td>
                <p>{playersData.battingDetails.battingStyle}</p>
                <p>{playersData.battingDetails.avgStrikeRate}</p>
                </td>

                {/* <td>
                  <button
                    className="teamsUpdateBtn"
                    onClick={() => navigate('/')}  
                  >Update</button>
                </td> */}
                <td>
                  <button
                    className="teamsDeleteBtn"
                    onClick={() => {
                      fetch(`https://ipl-server-kb8z.onrender.com/players/${playersData._id}` , {
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
