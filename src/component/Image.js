import React from "react";
const Image = ({img}) => {
    return(
    <div>
      <img src={img} alt="img" width="120" height="80"/>
    </div>
    );
}

export default Image;