import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db} from "../api/firebase.config"
import { Button, Grid, Checkbox,TextField, Card, CardContent} from "@mui/material";
import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';

import { UserAuth } from "../context/AuthContext";

export function Home () {
  const {user, logOut} = UserAuth();
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
const cerrarSesión=async()=>{
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    }

return(
    <div>
        <Grid container>
            <Grid item md={6}>
                <img style={{width:"100%"}} src="https://static.vecteezy.com/system/resources/previews/002/722/463/original/check-list-sign-flat-icon-illustration-free-vector.jpg" alt="" />
            </Grid>
            <Grid item md={6} className="fondo">
            <div className="actividades-grid">
                            
            <CardContent >
                    <div className="usuario">
                    <img src={user.photoURL}/>
                    <p className="saludo">{user.displayName}</p>
                    </div>
<div className="actividades">
<h2>Estas son tus actividades del día</h2><br />
                    <Grid item md={12} className="grid-act"> {
                        
                act.length>0 && act.map((prod)=>( 
                    
                    <div className="tarea" key={prod.id}>
                        
                        <div><Checkbox onClick={()=>cambiarestado(prod)}/>
                        {prod.nombre}</div>
                        <div><Button onClick={() => removeItem(car.id)} startIcon={<DeleteIcon />}></Button></div>
                        
                    </div>
                   
                ))
            }
             </Grid>
             <center><Button variant="contained" className="mas" style={{ borderRadius: 40, margin:'10px'}}> <span>+</span> </Button></center>
</div>
                   
                    
                    
                </CardContent>

           

           
            <div className="botoncerrar">
                    <Button variant="contained" size="medium" style={{backgroundColor:"#D43067"}} onClick={cerrarSesión}> &nbsp;&nbsp;Salir &nbsp;</Button>
                    </div>
            </div>
            </Grid>

        </Grid>
    </div>
)
}
