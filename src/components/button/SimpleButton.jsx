import React from 'react'
import classes from './SimpleButton.module.css'

export default function SimpleButton({text, onClick, type}){
    return (<>
            <button className={classes.basicBttn} onClick={onClick} type={type}>
                {text}
            </button>
        </>)
}