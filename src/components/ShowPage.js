import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowPage = (props) => {
	console.log(props);
	return (
		<div className="container mt-5 text-center">
			<h2>Added Product</h2>
			<div className="row mt-4">
				<div className="col">
					<h4>Product name</h4>
					<p style={{ fontSize: 24 }}>{props.location.state.productName}</p>
					<h4>Product description:</h4>
					<p style={{ fontSize: 24 }}>{props.location.state.productDesc}</p>
					<h4>Product price:</h4>
					<p style={{ fontSize: 24 }}>${props.location.state.productPrice} </p>
					<h4>Product category:</h4>
					<p style={{ fontSize: 24 }}>{props.location.state.productCategory} </p>
					<h4>Product imageUrl:</h4>
					<img style={{ width: 250, height: 250 }} src={props.location.state.productImage} alt="" />
					<h4>Product color:</h4>
					<p style={{ fontSize: 24 }}>{props.location.state.productColor}</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ShowPage);
