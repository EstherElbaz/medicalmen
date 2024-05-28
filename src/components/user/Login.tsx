import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const checkUser = () => {

        console.log(userName, password)
    }

    return (
        <div className="formContainer form">
            <h2>שלום😊</h2>
            <div>
                <input className="form-item" id="userName" placeholder="שם משתמש/אימייל" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div>
                <input className="form-item" id="password" placeholder="סיסמה" type="password" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div>
                <br></br>
                <button className="btn" onClick={checkUser}>התחבר</button>
            </div>
            <div>
                <br></br>
                <Link to="/signup">
                    <button className="btn" id="newUser">משתמש חדש? צור חשבון</button>
                </Link>
            </div >
        </div>

    );

}