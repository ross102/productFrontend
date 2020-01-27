import React from 'react';

import product from '../api/product';

export const postApi = async (cur, setCur) => {
	const data = {
		name: cur.productName,
		description: cur.productDesc,
		price: cur.productPrice,
		category: cur.productCategory,
		image: cur.productImage,
		color: cur.productColor
	};
	//send data
	await product
		.post('/product', {
			data
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
