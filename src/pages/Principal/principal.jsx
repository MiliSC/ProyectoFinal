import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import { Button, Grid, Checkbox,TextField, Card, CardContent} from "@mui/material";
import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Grid container>
                <Grid item md={12}>
                <h1>Mis actividades</h1><br/>
                </Grid>
                <Grid item md={12}>
                <Card>
                    <CardContent>
                        <Grid item md={12} > {
                            
                    act.length>0 && act.map((prod)=>(
                        <div style={{display: "flex"}}>
                    <div key={prod.id}>
                        <Checkbox onClick={()=>cambiarestado(prod)}/>{prod.nombre}
                        <Button onClick={() => removeItem(car.id)} startIcon={<DeleteIcon />}></Button> 
                    </div>
                    </div>
                    ))
                }
                        </Grid>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </div>
    )
}

// {
//     return (
//         <div key={prod.id}>
//         <h1>{prod.nombre}</h1>
//     </div>
//     )
// }