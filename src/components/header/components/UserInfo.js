import React from "react";
import Login from "../../login/Login";
import Popup from "reactjs-popup";
import classes from "../Header.module.css";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
	// Navigate object and function to change pages based on user clicks
	const navigate = useNavigate();
	const routeNavigate = (path) => {
		console.log(path);
		navigate(path);
	};

	// delete user session on client
	const logoff = () => {
		sessionStorage.clear();
		navigate("/");
	};

	// evaluate presence of user session to render user info or login button
	const user = JSON.parse(sessionStorage.getItem("sprint1"));
	if (user) {
		return (
			<div className={classes.infoUserCard}>
				<p className={classes.headerLink}>{user.user}</p>
				<button
					onClick={() => routeNavigate("/usuario")}
					className={classes.logoffBttn}
				>
					Perfil
				</button>
				<button className={classes.logoffBttn} onClick={logoff}>
					Sair
				</button>
			</div>
		);
	} else {
		return (
			<div className={classes.infoUserCard}>
				<p className={classes.userName}>Não conectado</p>
				<Popup
					trigger={
						<button className={classes.logoffBttn}>Entrar/Registrar</button>
					}
					modal
					nested
				>
					<Login />
				</Popup>
			</div>
		);
	}
}
