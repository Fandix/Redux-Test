import { connect } from "react-redux";
import ProductTable from "../Presentational Component/ProductTable";
import { Products } from "../Products"

const getInputVisibleData = (data,filter) => {
    const rows = [];
    let count = 0;
    data.forEach((product) => {
        if(filter.text){
            if(product.name.indexOf(filter.text) === -1){
                return;
            }
        }
        if(filter.isStock)
        {
            if(product.stocked !== filter.isStock){
                return;
            }
        }
        rows[count++] = product;
    })
    return rows;
};

const mapStateToProps = (state) => {
    return {
        Products:getInputVisibleData(Products,state.InputdataFilter)
    }
};

const VisibleTodoList = connect(
    mapStateToProps
)(ProductTable)

export default VisibleTodoList