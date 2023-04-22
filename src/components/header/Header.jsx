import React from 'react'
import Popup from 'reactjs-popup'
import * as FaIcons from 'react-icons/fa';
import classes from './Header.module.css'
import { useNavigate } from "react-router-dom"
import UserInfo from './components/UserInfo';

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
        <div><span className={classes.headerLink} ><b onClick={()=>navigateRoute('sobre')}>Sobre</b></span></div>
        <div><span className={classes.headerLink} ><b onClick={()=>navigateRoute('contato')}>Contato</b></span></div>
        <div>
          <Popup className={classes.headerLink} trigger={<span  ><FaIcons.FaUserCircle /> </span>}
            position="bottom right"
            on="click"
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={true}
            nested
          >
            <div >
              <UserInfo />
                
            </div>
          </Popup>
        </div>
      </div>
    </div>
  )
}
