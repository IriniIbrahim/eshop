import React, {
	useContext,
} from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
	const {
		id,
		productName,
		price,
		productImage,
		productCategory,
	} = props.data;
	const { addToCart, cartItems } =
		useContext(ShopContext);
	const cartItemAmount = cartItems[id];
	return (
		<div className="card">
			<div className="product">
				<img
					src={productImage}
					alt={productName}
				/>
				<div className="description">
					<p>
						<b>{productName}</b>
					</p>
					<p>{price} kr</p>
				</div>
				<button
					className="addToCartBttn"
					onClick={() => addToCart(id)}
				>
					Add to cart{" "}
					{cartItemAmount > 0 && (
						<>({cartItemAmount})</>
					)}
				</button>
			</div>
		</div>
	);
};
