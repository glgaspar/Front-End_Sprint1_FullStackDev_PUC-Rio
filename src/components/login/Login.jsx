import React from "react";
import classes from "./login.module.css";
import { APIPost } from "../api/Api";
import NewUserForm from "./NewUserForm";

export default function Login() {
	const handleSubmit = (event) => {
		event.preventDefault();
		if (event.target.className.includes("loginForm")) {
			const data = {
				email: event.target.email.value,
				pssw: event.target.password.value,
			};
			APIPost("/login", data).then((data) => {
				try {
					if (data.data.message?.message === "Login successful") {
						sessionStorage.setItem("sprint1", JSON.stringify(data.data.user));
						window.location.reload();
					} else if (data.status === 400) {
						alert("Usuário não encontrado");
					}
				} catch {
					alert("Algo deu errado. Por favor tente novamente.");
				}
			});
		}
	};

	return (
		<div className={classes.loginContainer}>
			<form className={classes.loginForm} onSubmit={(e) => handleSubmit(e)}>
				<h3>Entrar na sua conta</h3>
				<div className={classes.formGroup}>
					<label htmlFor="email">E-mail</label>
					<input type="email" name="email" required></input>
				</div>
				<div className={classes.formGroup}>
					<label htmlFor="password">Senha</label>
					<input type="password" name="password" required></input>
				</div>
				<div className={classes.formBttns}>
					<button className={classes.loginBttn} type="submit">
						Entrar
					</button>
					<NewUserForm />
				</div>
			</form>
		</div>
	);
}
