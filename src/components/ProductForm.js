import React from 'react';

const ProductForm = (props) => {
	return (
		<div className="container mt-5 mb-5">
			<h3>
				<b>Product Form. Added a change</b>
			</h3>
			<form onSubmit={props.handleSubmit} className="mt-3">
				<div className="form-group">
					<label>Product name:</label> <br />
					<input
						style={{ width: 300, height: 30 }}
						className="form-group"
						type="text"
						name="productName"
						onChange={props.handleChange}
						required
						value={props.productName}
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<br />
					<textarea
						style={{ width: 300, height: 150 }}
						className="form-group"
						value={props.productDesc}
						name="productDesc"
						required
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Price</label>
					<br />
					<input
						style={{ width: 300, height: 30 }}
						className="form-group"
						type="number"
						name="productPrice"
						onChange={props.handleChange}
						required
						value={props.productPrice}
					/>
				</div>
				<div className="form-group">
					<label>Category</label>
					<br />
					<input
						style={{ width: 300, height: 30 }}
						className="form-group"
						type="text"
						name="productCategory"
						onChange={props.handleChange}
						required
						value={props.productCategory}
					/>
				</div>
				<div className="form-group">
					<label>Image url: </label>
					<br />
					<input
						style={{ width: 300, height: 30 }}
						className="form-group"
						type="text"
						name="productImage"
						onChange={props.handleChange}
						required
						value={props.productImage}
					/>
				</div>
				<div className="form-group">
					<label>Color:</label>
					<br />
					<input
						style={{ width: 300, height: 30 }}
						className="form-group"
						type="text"
						name="productColor"
						onChange={props.handleChange}
						required
						value={props.productColor}
					/>
				</div>
				<button style={{ width: 300, height: 30 }} type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ProductForm;
