import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";



export const Principal = () =>{
    const [act, setAct] = useState([]);
    useEffect(()=>{
       const getActivities = async () =>{
        const actividades = await getDocs(collection(db, "Actividades"));
            // console.log(getActivities);
            const data = actividades.docs.map((valor) => {
                return {id: valor.id, ...valor.data()}
            });
            return data;
    };
    getActivities().then((res)=>setAct(res));
     //getActivities().then(res=>console.log(res))
    

    },[]);

    return(
       
        <div>
            <h2>hola</h2>
            {
                
            act.map((prod)=>{
                <div key={prod.id}>
                    <h1>hola</h1>
                    <p>{prod.nombre}</p>
                </div>
})
            }
        </div>
    )
}