//this component display one medicine, and contain the name, sum and icon for the medicine, and checbox for confirming taking medicine. 

import React, { useState } from "react"

export default function MedicineToShow(props: any) {

    //const [status,setStutus] = useState();
    const [isToken, setIsToken] = useState(false);
    const [disabled,setDisabled]=useState(true)
    const [backgroundColor,setBackgroundColor]=useState<string>('#EFEEFF');

   
   //כל נתוני התרופה נשמרים בסטייט, ונשלחים לפונקציה הזאת, ולא צריך ליצור מודל חדש שרק מסרבל. 
   
//    const addTakingMedication = async (medobj: TakingMedication) => {
//         let medJson = JSON.stringify(medobj);
//         const requestOptions = {
//             method: 'POST',
//             body: JSON.stringify(medJson),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         };

//         const res = await fetch(`https://localhost:7247/api/TakingMedication`);
//         if (!res.ok) {
//             throw console.error(`stautus: ${res.status}. try again later`);
//         }
//         else{
//             console.log(res.json)
//             alert(`לקחת את התרופה ${props.name}`)
//         }
//     }

    // const ITtokmymedicine = async () => {
    //     setIsToken(!isToken)
    //     setDisabled(false);
        
    //     setBackgroundColor("#A78BFA")
       
    //     const tmObj: TakingMedication = new TakingMedication(props.id, new Date());
    //     addTakingMedication(tmObj);
    
    // }


    return ( 
        <div className={"medicine"}style={{backgroundColor}}>
           
            <div className="medicineName">{props.name}</div>
            <div className="medicineNote">{props.note}</div>
            <div className="medicineHour">{props.hour}</div>
            {/* {disabled && (
            // <div className="checkbox"><Checkbox onClick={ITtokmymedicine} ></Checkbox></div>
            )
            }       */}
        </div>
        
    )
}