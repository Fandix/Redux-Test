import { combineReducers } from 'redux'

const InputdataFilter = (state = {},action) => {
    switch (action.type) {
        case "INPUT_FILTER":
           return(
               Object.assign({},state,{
                   text:action.text
               })
           )

        case "STOCK_FILTER":
            return(
                Object.assign({},state,{
                    isStock:action.isStock
                })
            )
               
        default:
            return state;
    }
}


const Reducers = combineReducers({
    InputdataFilter,
})

export default Reducers;