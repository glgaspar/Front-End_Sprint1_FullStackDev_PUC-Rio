import React from 'react'
import classes from './Header.module.css'
import { useNavigate } from "react-router-dom"

export default function Header() {

  // Navigate object and function to change pages based on user clicks
  const navigate = useNavigate()
  const navigateRoute = (route) => { 
    let path = `/${route}`; 
    navigate(path);
}
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerInfo}>
        <div className={classes.logoContainer}>
          <p onClick={()=>navigateRoute('home')}>Logo muito legal</p>
        </div>  
        <span className={classes.headerLink} onClick={()=>navigateRoute('sobre')}>Sobre</span>
        <span className={classes.headerLink} onClick={()=>navigateRoute('contato')}>Contato</span>
      </div>
    </div>
  )
}
