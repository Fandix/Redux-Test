import React from "react";
import { connect } from "react-redux";
import { SetVisibilityFilter,InputFilter } from "../Store/Action/Action"; 
 

class SearchBar extends React.Component
{
    handleChange = (e) => {
        const value = e.target.value;
        this.props.dispatch(InputFilter(value));
    }

    //=====================================

    handleClick = (e) => {
        const checkbox = e.target.checked;
        this.props.dispatch(SetVisibilityFilter(checkbox));
    }

    //=====================================

    render()
    {
        return(
            <form>
                <input 
                    type="text" 
                    onChange={ this.handleChange }    
                />
                <p>
                    <input 
                        type="checkbox" 
                        onClick={ this.handleClick }
                    />
                    Only show products in stock
                </p>
            </form>
        )
    } 
}

export default connect()(SearchBar);