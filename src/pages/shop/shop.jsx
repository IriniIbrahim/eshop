import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import bgvideo from "../../assets/bg.mp4";

export const Shop = () => {
	return (
		<div className="shop">
			<div className="shoptitle">
				<video
					className="background-video"
					autoPlay
					muted
					loop
				>
					<source
						src={bgvideo}
						type="video/mp4"
					/>
				</video>
				<div className="headertext">
					<p className="text">
						Summer collection
					</p>
				</div>
			</div>
			<h2 className="filter">
				For Her
			</h2>
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

			<h2 className="filter">
				For Him
			</h2>
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
