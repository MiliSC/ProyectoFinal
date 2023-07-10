
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

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
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
        </div>
    )
}