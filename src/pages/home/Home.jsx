import React, { useEffect, useState } from "react";
import { APIGet } from "../../components/api/Api";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		APIGet("/products").then((data) => {
			console.log(data.data);
			setItens(data.data.product);
		});
	}, []);

	const navigate = useNavigate();
	return (
		<div className={classes.homeContainer}>
			{itens &&
				itens.map((category, index) => {
					return (
						<div className={classes.categorySection} key={index}>
							<h3>{category.categories}</h3>
							<div className={classes.categoryData}>
								{category.itens?.map((iten, index) => {
									return (
										<div
											className={classes.itenCard}
											key={index}
											onClick={() => navigate(`/produto?${iten.id}`)}
										>
											<h5>{iten.name}</h5>
											<div className={classes.homeProductImg}>
												<img src={iten.img} alt={iten.name} />
											</div>
											<div>
												{iten.price.toLocaleString("pt-br", {
													style: "currency",
													currency: "BRL",
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
}
