
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import './styles.css'
import { Button, Grid, TextField, Card, CardContent} from "@mui/material";
import { CheckBox, ForkRightTwoTone } from "@mui/icons-material";

export const Login = () =>{
    const handleGoogleLogin=()=>{
        try{
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
        }catch (error){
            console.log(error)
        }
    }
    return(
        <div>            
            <Grid container>
                <Grid item md={6}>
                    <img style={{width:"100%"}} src="https://static.vecteezy.com/system/resources/previews/002/722/463/original/check-list-sign-flat-icon-illustration-free-vector.jpg" alt="" />
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardContent>
                            <h2 className="login">Login</h2>
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
                                <Button variant="contained" fullWidth>Iniciar Sesión</Button>
                                </Grid>
                                <Grid item md={12}>
                                <Button onClick={handleGoogleLogin} variant="outlined" fullWidth>Google</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}