import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
       <div>
            
            <Link to="/">Home</Link>
            <br/>
            <Link to="/product">product</Link>
            <br/>
            <Link to="/task">task</Link>
            <br/>
            <br/>
            <br/>

       </div>
    )
}
export default Header