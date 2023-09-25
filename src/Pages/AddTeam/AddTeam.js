import React, { useState, useEffect } from 'react';
import './addTeam.css';
import { useNavigate } from 'react-router-dom';


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

    const addTeam = () => {
        const addNewTeam = {
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
        fetch(`https://ipl-server-kb8z.onrender.com/teams/createTeam`, {
            method: "POST",
            body: JSON.stringify(addNewTeam),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((response) => response.json())
        // .then(()=> navigate('/teams'))
    }

    useEffect(() => {
        // addTeam()
    },[]);


    return(
        <div className="addTeamContainer">
            <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate('/teams')}
                >Back</button>
                <h3 className="newUserTitle">CREATE NEW TEAM</h3>
            </div>
            {/* <form className="newUserForm"> */}
            <div className="newUserForm">
                <div className="newUserItem">
                    <label>TeamName</label>
                    <input 
                        className="teamInputField"
                        type="text"                                    
                        placeholder="Enter the teamName"
                        value={teamName}
                        onChange={event => setTeamName(event.target.value) }
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamShortName</label>
                    <input 
                        className="teamInputField"
                        type="text" 
                        placeholder='Enter the teamShortName' 
                        value={teamShortName}
                        onChange={(event) => setTeamShortName(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamLogo</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the teamLogo' 
                        value={teamLogo}
                        onChange={(event) => setTeamLogo(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>ColorCode</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the colorCode' 
                        value={colorCode}
                        onChange={(event) => setColorCode(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TotalPlayers</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the totalPlayers' 
                        value={totalPlayers}
                        onChange={(event) => setTotalPlayers(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TotalSubstitutes</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the totalSubstitutes of players' 
                        value={totalSubstitutes}
                        onChange={(event) => setTotalSubstitutes(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>State</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the state on playing' 
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamOwner</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the teamOwner name' 
                        value={teamOwner}
                        onChange={(event) => setTeamOwner(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCaptain</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the teamCaptain name' 
                        value={teamCaptain}
                        onChange={(event) => setTeamCaptain(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCoach</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the teamCoach name' 
                        value={teamCoach}
                        onChange={(event) => setTeamCoach(event.target.value)}
                    />
                </div>
                <div className="newUserItem">
                    <label>TeamCup</label>
                    <input
                        className="teamInputField" 
                        type="text" 
                        placeholder='Enter the teamCup' 
                        value={teamCup}
                        onChange={(event) => setTeamCup(event.target.value)}
                    />
                </div>
                <button 
                    className="addTeamButtonBottom"
                     onClick={() => {
                        addTeam()
                        navigate('/teams')
                     }}          
                >Create Team</button>
                </div>
            {/* </form> */}
        </div>
    )
}
