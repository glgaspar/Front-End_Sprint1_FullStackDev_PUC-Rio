import React, { useEffect, useState } from "react";
import classes from "./user.module.css";
import { APIGet, APIPut } from "../../components/api/Api";

export default function User() {
	const [orders, setOrders] = useState();
	const user = JSON.parse(sessionStorage.getItem("sprint1"));
	useEffect(() => {
		console.log(user.email);
		APIGet(`/purchases?userEmail=${user.email}`).then((response) => {
			console.log(response);
			setOrders(response.data.orders);
		});
	}, []);

	const cancelOrder = (order) => {
		APIPut(`cancelOrder?orderId=${order}`);
	};
	return (
		<div className={classes.containerPedido}>
			<div className={classes.containerInfo}>
				<div className={classes.subContainerInfo}>
					<div className={classes.main}>
						<div className={classes.Pedido}>
							<h3 className={classes.tituloPagina}>{user.user}</h3>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.containerDetalhes}>
				<div className={classes.barraEsquerda}>
					<div className={classes.sideClienteInfo}>
						<div className={classes.infoCadastro}>
							<h4>Detalhes do Cadastro</h4>
							<p>Email: {user.email}</p>
							<p>Telefone: {user.tel}</p>
							<p>Endereço: {user.address}</p>
						</div>
						<hr />
					</div>
				</div>
				<div className={classes.barraDireita}>
					<div className={classes.listaItens}>
						<h3 className={classes.tituloCards}>
							<strong>Pedidos</strong>
						</h3>
						<div className={classes.cardItemHolder}>
							{orders &&
								orders.map((order, index) => {
									return (
										<div className={classes.card} key={index}>
											<div className={classes.cardInfo}>
												<h4 className={classes.cardTitulo}>
													<b>Pedido: {order.id} </b>
													<span> | {order.date}</span>
													{order.cancel === 1 ? (
														<span> | Cancelado</span>
													) : (
														<button
															className={classes.cancelOrderBttn}
															onClick={() => cancelOrder(order.id)}
														>
															Cancelar Pedido
														</button>
													)}
												</h4>
												{order.itens.map((iten, index) => {
													return (
														<div className={classes.cardDetalhes} key={index}>
															<img src={iten.img} alt={iten.product} />
															<span>{iten.product}</span>
															<span>|</span>
															<span>Marca: {iten.brand}</span>
															<span>|</span>
															<span>Quantidade: {iten.amount}</span>
															<span>|</span>
															<span>
																Valor Total:
																{(iten.unitPrice * iten.amount).toLocaleString(
																	"pt-br",
																	{ style: "currency", currency: "BRL" }
																)}
															</span>
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
