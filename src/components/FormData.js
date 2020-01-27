import React, { useState } from 'react';

import ProductForm from './ProductForm';
import { postApi } from '../helpers/postApi';

const FormData = (props) => {
	const [ cur, setCur ] = useState({
		productName: '',
		productDesc: '',
		productPrice: '',
		productCategory: '',
		productImage: '',
		productColor: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// send data to backened
		sendData();
		// empty form
		// setCur({
		// 	productName: '',
		// 	productDesc: '',
		// 	productPrice: '',
		// 	productCategory: '',
		// 	productImage: '',
		// 	productColor: ''
		// });
	};

	const handleChange = (event) => {
		setCur({
			...cur,
			[event.target.name]: event.target.value
		});
	};

	const sendData = async () => {
		await postApi(cur, setCur);
		props.history.push('/show', { ...cur });
	};

	return (
		<ProductForm
			handleChange={handleChange}
			productName={cur.productName}
			productDesc={cur.productDesc}
			productPrice={cur.productPrice}
			productCategory={cur.productCategory}
			productImage={cur.productImage}
			productColor={cur.productColor}
			handleSubmit={handleSubmit}
		/>
	);
};

export default FormData;
