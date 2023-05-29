import React from "react";

export const CartItems = (props) => {
	const {
		id,
		productName,
		price,
		productImage,
	} = props.data;
	return (
		<div className="cartItem">
			<img src={productImage} />
			<div className="description">
				<p>
					{""}
					<b>{productName}</b>
				</p>
				<p>{price}kr</p>
			</div>
		</div>
	);
};
