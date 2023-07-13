import { useEffect } from "react";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { Button, Grid, TextField, Card, CardContent} from "@mui/material";
import logogoogle from "../assets/logoogle.png";
export function Login() {
  const navigate = useNavigate();
  const {user,googleSignIn} = UserAuth();
  const iniciarSesion=async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
if(user!=null){
  navigate("/")
}
  },[user])
  return (
<div>            
            <Grid container>
                <Grid item md={6}>
                    <img style={{width:"100%"}} src="https://static.vecteezy.com/system/resources/previews/002/722/463/original/check-list-sign-flat-icon-illustration-free-vector.jpg" alt="" />
                </Grid>
                <Grid item md={6} className="borde">
                    <Card className="card">
                        <CardContent className="cardContent">
                        <div className="container">
                        <h2 className="login">Login</h2><br></br>
                            <label htmlFor="">Gestiona todas tus tareas y lleva un mejor control de tu día a día</label>
                            <Grid container mt={5} spacing={3}>
                                <Grid item md={12}>
                                    <TextField label="Nombre" fullWidth name="nombre"/>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField label="Contraseña" fullWidth name="contraseña"/>
                                </Grid>
                                <Grid className="grid-olvide" item md={12}>
                                <label className="olvidepass" htmlFor="">Olvidé contraseña</label>
                                </Grid>
                              
                              <Grid item md={12}>
                              <div className="botones">
                                <Button className="btn" variant="contained" size="medium">Iniciar Sesión</Button>
                                </div>
                                </Grid>
                                <Grid item md={12}>
                                <div className="botones">
                                <Button onClick={iniciarSesion} variant="outlined" size="medium"><img src={logogoogle} style={{height:"20px", marginright:"10px"}}/>  Google</Button>
                                </div>
                                </Grid>
                              
                            </Grid>
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
  );
}
