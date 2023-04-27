import React from "react";
import classes from "./Contact.module.css";
import { APIPost } from "../../components/api/Api";

export default function Contact() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: event.target.nome.value,
			email: event.target.email.value,
			tel: event.target.telefone.value,
			message: event.target.mensagem.value,
		};

		APIPost("/contact", data).then((confirm) => {
			if (confirm.data.message === "Contact registered") {
				alert("Mensagem enviada com sucesso.");
			} else {
				alert("Algo de errado aconteceu. Por favor, tente novamente.");
			}
		});
	};

	return (
		<div className={classes.contactContainer}>
			<div className={classes.contacSideInfo}>
				<p>Contato</p>
			</div>
			<form className={classes.contactForm} onSubmit={(e) => handleSubmit(e)}>
				<div className={classes.formGroup}>
					<label htmlFor="nome">Nome</label>
					<input name="nome"></input>
				</div>

				<div className={classes.formGroup}>
					<label htmlFor="email">E-mail</label>
					<input type="email" name="email" required></input>
				</div>

				<div className={classes.formGroup}>
					<label htmlFor="telefone">Telefone</label>
					<input type="tel" name="telefone"></input>
				</div>

				<div className={classes.formGroup}>
					<label htmlFor="mensagem">Mensagem</label>
					<textarea name="mensagem"></textarea>
				</div>
				<div className={classes.formBttn}>
					<button className={classes.bttnContact} type={"submit"}>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
}
