import { Routes, Route } from 'react-router-dom'
import { Principal } from '../pages/Principal/principal'
import { Login } from '../pages/Login/Login'

export const RouterApp = () =>{
    return(
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    )
}