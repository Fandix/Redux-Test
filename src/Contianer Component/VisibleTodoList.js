import { connect } from "react-redux";
import ProductTable from "../Presentational Component/ProductTable";
import { Products } from "../Products"

const getInputVisibleData = (data,filter) => {
    console.log(filter)
    const rows = [];
    let count = 0;
    data.forEach((product) => {
        if(product.name.indexOf(filter.text) === -1)
            return; 
        if(product.stocked !== filter.isStock)
            return;

        rows[count++] = product;
        //rows.push(product);
    })
    return rows;
};

const mapStateToProps = (state) => {
    getInputVisibleData(Products,state.InputdataFilter);
    console.log(getInputVisibleData(Products,state.InputdataFilter));
    return {
        Products:getInputVisibleData(Products,state.InputdataFilter)
    }
};

const VisibleTodoList = connect(
    mapStateToProps
)(ProductTable)

export default VisibleTodoList