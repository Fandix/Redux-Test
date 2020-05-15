export const VisibilityFilter = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_STOCK:"SHOW_STOCK"
};

export const SetVisibilityFilter = (isStock) => {
    return({
        type:"STOCK_FILTER",
        isStock
    })
};

export const InputFilter = (text) => {
    return({
        type:"INPUT_FILTER",
        text
    })
};