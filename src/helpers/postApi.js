import React from 'react';

import product from '../api/product';

export const postApi = async (dt, setCur) => {
	const data = {
		name: dt.productName,
		description: dt.productDesc,
		price: dt.productPrice,
		category: dt.productCategory,
		image: dt.productImage,
		color: dt.productColor
	};
	//send data
	await product
		.post('/product', {
			...data
		})
		.then((res) => {
			if (res.data) {
				console.log(res.data);
			}
		})
		.catch((error) => {
			if (error.response) {
				console.error('error:' + error);
			}
		});
};
