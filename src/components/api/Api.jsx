import axios from "axios";

export function APIGet(path) {
	const api = axios.create({
		baseURL: "http://localhost:3001",
	});

	const info = api
		.get(path)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			return error.response;
		});
	return info;
}

export function APIPost(path, data) {
	const api = axios.create({
		baseURL: "http://localhost:3001",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const info = api
		.post(path, data)
		.then((retorno) => {
			console.log(retorno);
			return retorno;
		})
		.catch((error) => {
			return error.response;
		});

	return info;
}

export function APIPut(path, data) {
	const api = axios.create({
		baseURL: "http://localhost:3001",
	});

	const info = api
		.put(path)
		.then((retorno) => {
			console.log(retorno);
			return retorno;
		})
		.catch((error) => {
			return error.response;
		});

	return info;
}
