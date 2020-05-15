import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow"

class ProductTable extends React.Component
{
    Products = () => {
        const products = this.props.Products
        const FilterProduct = [];
        let lastCategory = "";

        products.forEach(product => {
            if(product.category !== lastCategory)
            {
                FilterProduct.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            FilterProduct.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            )
            lastCategory = product.category;
        })
        return FilterProduct;
    };

    render()
    {
        return(
             <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{this.Products()}</tbody>
            </table>
        )
    }
}

export default ProductTable;