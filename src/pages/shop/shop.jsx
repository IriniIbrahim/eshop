import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import bgvideo from "../../assets/bg.mp4";

export const Shop = () => {
	const [
		selectedCategory,
		setSelectedCategory,
	] = useState(null);
	const [searchQuery, setSearchQuery] =
		useState("");
	const handleCategoryClick = (
		category
	) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		PRODUCTS.filter((product) => {
			if (
				selectedCategory &&
				product.productCategory !==
					selectedCategory
			) {
				return false;
			}
			if (
				searchQuery &&
				!product.productName
					.toLowerCase()
					.includes(
						searchQuery.toLowerCase()
					)
			) {
				return false;
			}
			return true;
		});

	const allItems = PRODUCTS.map(
		(filteredProduct) => (
			<Product
				key={filteredProduct.id}
				data={filteredProduct}
			/>
		)
	);

	return (
		<div className="shop">
			<div className="shoptitle">
				<div className="headertext">
					{/* <p className="text">
						Summer collection
					</p> */}
				</div>
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
			</div>

			<div className="btnwrapper">
				<button
					className="filterbtn"
					onClick={() =>
						handleCategoryClick(1)
					}
				>
					For her
				</button>
				<button
					className="filterbtn"
					onClick={() =>
						handleCategoryClick(2)
					}
				>
					For him
				</button>
				<button
					className="filterbtn"
					onClick={() =>
						setSelectedCategory(null)
					}
				>
					All
				</button>
				<br />
				<div className="searchwrapper">
					<input
						className="searchinput"
						type="text"
						value={searchQuery}
						onChange={(e) =>
							setSearchQuery(
								e.target.value
							)
						}
					/>
					{/* <button
					className="searchbtn"
					onClick={() =>
						setSearchQuery("")
					}
				>
					Clear
				</button> */}
					<button
						className="searchbtn"
						onClick={() =>
							console.log(
								filteredProducts
							)
						}
					>
						Search
					</button>
				</div>
			</div>

			<div className="products">
				{selectedCategory
					? filteredProducts.map(
							(filteredProduct) => (
								<Product
									key={
										filteredProduct.id
									}
									data={filteredProduct}
								/>
							)
					  )
					: searchQuery
					? filteredProducts.map(
							(filteredProduct) => (
								<Product
									key={
										filteredProduct.id
									}
									data={filteredProduct}
								/>
							)
					  )
					: allItems}
			</div>
		</div>
	);
};
