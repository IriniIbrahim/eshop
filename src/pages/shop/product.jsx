import React, {
	useContext,
} from "react";
import { ShopContext } from "../../context/shop-context";
import { Handbag } from "phosphor-react";
export const Product = (props) => {
	const {
		id,
		productName,
		price,
		productImage,
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
					<Handbag size={18} />
					{"   "}
					{cartItemAmount > 0 && (
						<>
							&nbsp; &nbsp;
							{cartItemAmount}
						</>
					)}
				</button>
			</div>
		</div>
	);
};
