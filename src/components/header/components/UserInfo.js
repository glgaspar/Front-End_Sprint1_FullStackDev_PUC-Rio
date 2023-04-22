import React from 'react'
import Login from '../../login/Login'
import Popup from 'reactjs-popup'
import classes from '../Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function UserInfo() {
    const navigate = useNavigate()
    const routeNavigate=(path)=>{
        console.log(path)
        navigate(path)
    }
    const logoff = ()=>{
        sessionStorage.clear()
        navigate('/')
    }

    const user = JSON.parse(sessionStorage.getItem("sprint1"))
    console.log(user)
    if (user){
        return(
            <div className={classes.infoUserCard}>
                <p className={classes.headerLink} >{user.user}</p>      
                <button onClick={()=>routeNavigate('/usuario')} className={classes.logoffBttn} >Perfil</button>                       
                <button className={classes.logoffBttn} onClick={logoff}>Sair</button>
            </div>
    )
    }else{
    return(
    <div className={classes.infoUserCard}>
        <p className={classes.userName}>Não conectado</p>
        <Popup trigger={<a className={classes.logoffBttn} >Entrar/Registrar</a>} modal nested >
            <Login />
        </Popup>
    </div>)
    }
}
