import React from "react";
import SearchBar from "./Contianer Component/SearchBar"
import VisibleTodoList from "./Contianer Component/VisibleTodoList"

const App = (props) => {
    return(
        <div>
            <SearchBar />
            <VisibleTodoList />
        </div>
    )
};

export default App;