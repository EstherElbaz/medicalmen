import { useState } from "react";

export default function SignUp() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confPassword, setConfPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [idNum, setIdNum] = useState<string>("");
    const [birthDate, setBirthDate] = useState<any>(new Date);
    const [genderId, setGenderId] = useState<any>(2);
    const [error, setError] = useState<string | null>(null);

    const options = [
        { value: 1, label: "בן" },
        { value: 2, label: "בת" },
    ];

    //     // בצע קריאת POST ל-API לאימות המשתמש
    //     try {
    //         const response = await fetch('https://api.example.com/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ userName, password }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('המשתמש לא נמצא או הסיסמה שגויה');
    //         }

    //         const userData = await response.json();

    //         // שמור את פרטי המשתמש בקונטקסט
    //         setUser(userData);

    //         // ניווט לדף ניהול או דף אחר לפי הצורך
    //         navigate('/dashboard');
    //     } catch (error) {
    //         // טיפול בשגיאות
    //         console.error('שגיאה:', error);
    //     }
    // };

    const register = async () => {
        console.log("in register")
        setError(null);
        const newUser = JSON.stringify({ email, password, firstName, lastName, birthDate, idNum, genderId });
        console.log(newUser);
        try {
            const response = await fetch('https://localhost:7247/api/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newUser,

            });

            if (!response.ok) {
                throw new Error('המשתמש לא נמצא או הסיסמה שגויה');
            }

        } catch (error) {
            // טיפול בשגיאות
            console.error('שגיאה:', error);
        }
    }


    return (
        <div>
            <div className="form loginContainer">
                <div id="register" >
                    <h1>הרשמה לאתר</h1>
                    <h5>בשביל הבריאות שלך, רק כמה פרטים קטנים</h5>
                    <input className="form-item" id="userName" type="email" placeholder="כתובת מייל" onChange={(e) => { { setEmail(e.target.value) } }}></input>
                    <br></br>
                    <input id="password" type={"password"} placeholder="סיסמה" onChange={(e) => { { setConfPassword(e.target.value) } }}></input>
                    <br></br>
                    <input className="form-item" id="confirmpassword" type={"password"} placeholder="אימות סיסמה" onChange={(e) => { { setPassword(e.target.value) } }}></input>
                    <br></br>
                    <br></br>
                    <input className="form-item" id="firstName" placeholder="שם פרטי" onChange={(e) => { { setFirstName(e.target.value) } }}></input>
                    <br></br>
                    <input className="form-item" id="lastName" placeholder="שם משפחה" onChange={(e) => { { setLastName(e.target.value) } }}></input>
                    <br></br>
                    <input className="form-item" id="idNum" placeholder="תעודת זהות" onChange={(e) => { { setIdNum(e.target.value) } }}></input>
                    <br></br>
                    <select className="form-item" id="genderSelect" onChange={(event) => setGenderId((event.currentTarget.value))}>
                        <option value={1}>בן</option>
                        <option value={2}>בת</option>
                    </select>
                    <br></br>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label={"תאריך לידה"} onChange={(newValue) => setBirthDate(newValue)} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <br></br> */}

                    {/* <Select   value={genderId} options={options} onChange={handleChange} /> */}

                    <button className="btn" onClick={register}>הרשמה</button>

                </div>
            </div>
        </div>

    )
}