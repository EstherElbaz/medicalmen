import { useState } from "react";



export default function SignUp (){

    const [userName, setuserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confPassword, setConfPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [idNum, setIdNum] = useState<string>("");
    const [birthDate, setBirthDate] = useState<any>(new Date);
    const [genderId, setGenderId] = useState<any>(2);

    const options = [
        { value: 1, label: "בן" },
        { value: 2, label: "בת" },
    ];



    return (
        <div>
           <h1>הרשמה לאתר</h1> 
           <div className="form">
            <div className="mt-5 m-auto w-50">
                <div id="register" >

                    <input className="form-item" id="userName" type="email" placeholder="כתובת מייל" onChange={(e) => { { setuserName(e.target.value) } }}></input>
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
                    <select className="form-item" id="genderSelect" onChange={(event)=>setGenderId((event.currentTarget.value) )}>
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
                  
                    {/* <button onClick={register}>הרשמה</button> */}


                </div>
            </div>
        </div>
        </div>

    )
}