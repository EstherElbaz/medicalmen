import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

export default function Login() {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    if (!userContext) {
        throw new Error('UserContext must be used within a UserProvider');
    }

    const { setUser } = userContext;

    const checkUser = async () => {
        console.log(userName, password);
        setError(null);
        try {
            const response = await fetch(`https://localhost:7247/api/User?userName=${userName}&password=${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'המשתמש לא נמצא או הסיסמה שגויה');
            }

            const userData = await response.json();
            console.log(userData);

            // שמור את פרטי המשתמש בקונטקסט
            setUser(userData);

            navigate('/dashboard');
        } catch (error) {
            console.error('שגיאה:', error);
            setError('המשתמש לא נמצא או הסיסמה שגויה');  
        }
    };

    return (
        <div className="formContainer form">
            <h2>שלום😊</h2>
            <div>
                <input
                    className="form-item"
                    id="userName"
                    placeholder="שם משתמש/אימייל"
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            <div>
                <input
                    className="form-item"
                    id="password"
                    placeholder="סיסמה"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="error-message">{error}</div>} {/* הצגת הודעת השגיאה */}

            <div>
                <br />
                <button className="btn" onClick={checkUser}>התחבר</button>
            </div>
            <div>
                <br />
                <Link to="/signup">
                    <button className="btn" id="newUser">משתמש חדש? צור חשבון</button>
                </Link>
            </div>
        </div>
    );
}

