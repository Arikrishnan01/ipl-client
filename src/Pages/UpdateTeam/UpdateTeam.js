import React, { useState, useEffect } from 'react';
import './updateTeam.css';
import { useNavigate, useParams } from 'react-router-dom';


// {
//     "teamName": "Chennai Super Kings",
//     "teamShortName": "csk",
//     "teamLogo": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71RqdGjufdL._SL1500_.jpg",
//     "colorCode": "#FFFF3C",
//     "totalPlayers": 25,
//     "totalSubstitutes": 0,
//     "state": "Tamilndu",
//     "teamOwner": " N.Srinivasan",
//     "teamCaptain": "M.S Dhoni",
//     "teamCoach": "Stephen Fleming",
//     "teamCup": 5
// }

export default function AddTeam(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [teamName, setTeamName ] = useState("");
    const [teamShortName, setTeamShortName ] = useState("");
    const [teamLogo, setTeamLogo ] = useState("");
    const [colorCode, setColorCode ] = useState("");
    const [totalPlayers, setTotalPlayers] = useState("");
    const [totalSubstitutes, setTotalSubstitutes] = useState("");
    const [state, setState] = useState("");
    const [teamOwner, setTeamOwner] = useState("");
    const [teamCaptain, setTeamCaptain] = useState("");
    const [teamCoach, setTeamCoach] = useState("");
    const [teamCup, setTeamCup] = useState("");

    const getTeamById = () => {
        fetch(`https://ipl-server-kb8z.onrender.com/teams/${id}`, {
            method: "GET",
        })
        .then((data) => data.json())
        .then((team)=> {
            console.log(team)
            setTeamName(team.Team.teamName);
            setTeamShortName(team.Team.teamShortName);
            setTeamLogo(team.Team.teamLogo);
            setColorCode(team.Team.colorCode);
            setTotalPlayers(team.Team.totalPlayers);
            setTotalSubstitutes(team.Team.totalSubstitutes);
            setState(team.Team.state);
            setTeamOwner(team.Team.teamOwner);
            setTeamCaptain(team.Team.teamCaptain);
            setTeamCoach(team.Team.teamCoach);
            setTeamCup(team.Team.teamCup)
        })
    }

    useEffect(() => {
        getTeamById()
    },[]);


    return(
        <div className="addTeamContainer">
            <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate('/teams')}
                >Back</button>
                <h3 className="newUserTitle">UPDATE TEAM</h3>
            </div>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>TeamName</label>
                    <input 
                        className="teamInputField"
                        type="text"                                    
                        value={teamName}
                        onChange={event => setTeamName(event.target.value) }
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamShortName</label>
                    <input 
                        className="teamInputField"
                        type="text"  
                        value={teamShortName}
                        onChange={(event) => setTeamShortName(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamLogo</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={teamLogo}
                        onChange={(event) => setTeamLogo(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>ColorCode</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={colorCode}
                        onChange={(event) => setColorCode(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TotalPlayers</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={totalPlayers}
                        onChange={(event) => setTotalPlayers(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TotalSubstitutes</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        value={totalSubstitutes}
                        onChange={(event) => setTotalSubstitutes(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>State</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamOwner</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={teamOwner}
                        onChange={(event) => setTeamOwner(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCaptain</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={teamCaptain}
                        onChange={(event) => setTeamCaptain(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCoach</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={teamCoach}
                        onChange={(event) => setTeamCoach(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCup</label>
                    <input
                        className="teamInputField" 
                        type="text"  
                        value={teamCup}
                        onChange={(event) => setTeamCup(event.target.value)}
                    />
                </div>
                <button 
                    className="addTeamButtonBottom"
                     onClick={() => {
                        const updateTeam = {
                            teamName,
                            teamShortName,
                            teamLogo,
                            colorCode,
                            totalPlayers,
                            totalSubstitutes,
                            state,
                            teamOwner,
                            teamCaptain,
                            teamCoach,
                            teamCup
                        }
                        fetch(`https://ipl-server-kb8z.onrender.com/teams/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(updateTeam),
                            headers: {
                                "Content-type": "application/json",
                            }
                        })
                        .then((data) => data.json)
                        // .then(() => navigate('/teams'))
                        navigate('/teams')
                     }}          
                >Update Team</button>
            </form>
        </div>
    )
}
