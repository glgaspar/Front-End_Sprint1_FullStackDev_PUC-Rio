import React, { useRef } from "react";
import classes from "./login.module.css";
import Popup from "reactjs-popup";
import { APIPost } from "../api/Api";

export default function NewUserForm() {
	const ref = useRef();
	const closePopup = () => {
		ref.current.close();
	};

	const handleNewUser = (event) => {
		event.preventDefault();
		if (event.target.className.includes("registerUserForm")) {
			const data = {
				email: event.target.email.value,
				pssw: event.target.password.value,
				name: event.target.name.value,
				tel: event.target.tel.value,
				address: event.target.address.value,
			};
			console.log(data);
			APIPost("/newUser", data).then((data) => {
				console.log(data.data)
				try {
					if (data.data.message === "register successful") {
						closePopup();
						alert("Usuário cadatrado com sucesso");
					} else if (data.data.message === "User alredy in database") {
						alert("Usuário já cadatrado");
					}
				} catch {
					alert("Ocorreu um erro no registro");
				}
			});
		}
	};
	return (
		<Popup
			ref={ref}
			trigger={
				<button className={classes.loginBttn} type="button">
					Registrar
				</button>
			}
			modal
			nested
		>
			<div className={classes.registerUserFormContainer}>
				<form
					className={classes.registerUserForm}
					onSubmit={(e) => handleNewUser(e)}
				>
					<h3>Registrar Novo Usuário</h3>
					<div className={classes.formGroup}>
						<label htmlFor="email">E-mail</label>
						<input type="email" name="email" required></input>
					</div>
					<div className={classes.formGroup}>
						<label htmlFor="email">Senha</label>
						<input type="password" name="password" required></input>
					</div>
					<div className={classes.formGroup}>
						<label htmlFor="name">Nome</label>
						<input type="name" name="name" required></input>
					</div>
					<div className={classes.formGroup}>
						<label htmlFor="te">Telefone</label>
						<input type="telephone" name="tel" required></input>
					</div>
					<div className={classes.formGroup}>
						<label htmlFor="address">Endereço</label>
						<textarea type="address" name="address" required></textarea>
					</div>
					<div className={classes.formBttns}>
						<button className={classes.loginBttn} type="submit">
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</Popup>
	);
}
