import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { APIGet, APIPost } from "../../components/api/Api";

export default function Product() {
	const [iten, setIten] = useState();
	const [orderAmount, setOrderAmount] = useState(1);

	// Load data for given product Id in url
	useEffect(() => {
		APIGet(
			`/productDetail?productId=${window.location.href.split("/produto?")[1]}`
		).then((data) => {
			setIten(data.data);
		});
	}, []);

	// Handle + and - clicks for item amount
	function handleSetAmount(operation) {
		if (orderAmount + operation > 0) {
			setOrderAmount((orderAmount) => (orderAmount += operation));
		}
	}

	const handleProductSale = (event) => {
		event.preventDefault();
		const user = JSON.parse(sessionStorage.getItem("sprint1"));
		if (user) {
			const data = {
				email: user.email,
				productId: iten.id,
				amount: event.target.amount.value,
				unitPrice: iten.unitPrice,
			};
			APIPost("/newPurchase", data).then((response) => {
				if (response.data.message === "Purchase successful") {
					alert("Compra realizada com sucesso.");
				} else {
					alert("Algo de errado aconteceu. Por favor tente novamente.");
				}
			});
		} else {
			alert("É necessário fazer login para poder realizar uma compra.");
		}
	};

	return (
		<div className={classes.containerProduct}>
			<div className={classes.columnsContainer}>
				<div className={classes.productColumn}>
					<div className={classes.productImgContainer}>
						{iten && (
							<img
								className={classes.productImage}
								src={iten.img}
								alt={iten.name}
							/>
						)}
					</div>
				</div>
				<div className={classes.productColumn}>
					{iten &&
						iten.description.map((paragraph, index) => {
							return (
								<p className={classes.productDescription} key={index}>
									{paragraph}
								</p>
							);
						})}
				</div>
				<div className={classes.productColumn}>
					{iten && (
						<div className={classes.purchaseContainer}>
							<form onSubmit={(e) => handleProductSale(e)}>
								<h1 className={classes.productName}>{iten.name}</h1>
								<p className={classes.productPice}>
									{iten.unitPrice.toLocaleString("pt-br", {
										style: "currency",
										currency: "BRL",
									})}
								</p>
								<div className={classes.orderAmount}>
									<span
										className={classes.orderAmountSetter}
										onClick={() => handleSetAmount(-1)}
									>
										-
									</span>
									<input
										name="amount"
										className={classes.orderAmountInput}
										type="number"
										value={orderAmount}
										min={1}
										onChange={console.log(22)}
									/>
									<span
										className={classes.orderAmountSetter}
										onClick={() => handleSetAmount(1)}
									>
										+
									</span>
								</div>
								<button className={classes.buyBttn} type="submit">
									Comprar agora
								</button>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
