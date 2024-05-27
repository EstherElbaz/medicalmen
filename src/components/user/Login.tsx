import { useState } from "react";
import React = require("react");

export default function Login () 
{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");


    const checkUser = () => {

        console.log(userName,password)
    }

    return ( 
   <div className="loginContainer">
    <h2>שלום</h2>
    <input placeholder="שם משתמש/אימייל" onChange={e=> setUserName(e.target.value)}></input>
    <input placeholder="סיסמה" type="password" onChange={e => setPassword(e.target.value)}></input>
    <button onClick={checkUser}>התחבר</button>
    <button>משתמש חדש</button>

   </div>

    );

}