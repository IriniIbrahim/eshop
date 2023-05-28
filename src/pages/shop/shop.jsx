import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>H&M</h1>
			</div>
			<h2>For Her</h2>
			<div className="products">
				{PRODUCTS.filter(
					(product) =>
						product.productCategory ===
						1
				).map((filteredProduct) => (
					<Product
						key={filteredProduct.id}
						data={filteredProduct}
					/>
				))}
			</div>

			<h2>For Him</h2>
			<div className="products">
				{PRODUCTS.filter(
					(product) =>
						product.productCategory ===
						2
				).map((filteredProduct) => (
					<Product
						key={filteredProduct.id}
						data={filteredProduct}
					/>
				))}
			</div>
		</div>
	);
};
