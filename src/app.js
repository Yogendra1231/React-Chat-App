import React from "react";
import ReactDOM from "react-dom/client";



const Child = ()=>(
    <h1>hello world</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Child/>);