import React, {useState } from "react";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const checkUser = () => {

        console.log(userName, password)
    }

    return (
        <div className="loginContainer form">
            <h2>שלום😊</h2>
            <div>
                <input id="userName" placeholder="שם משתמש/אימייל" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div>
            <input id="password" placeholder="סיסמה" type="password" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div>
            <button className="btn" onClick={checkUser}>התחבר</button>
            </div>
            <button id="newUser">משתמש חדש</button>

        </div>

    );

}