import React from "react";
import Breadtop from "../../../src/assets/images/top.png";
import BreadBottom from "../../../src/assets/images/bottom.png";


const Ingredient = props => {
    let Ingredient = null;

    switch(props.types){
        case 'bread-bottom':
            Ingredient = <div><img src={BreadBottom} alt="Bottom Bread"/></div>;
            break;
        case 'bread-top':
            Ingredient = <div><img src={Breadtop} alt="Top Bread"/></div>;
            break;          
                

    }

    return(
        <div>

            {Ingredient}

        </div>
    )
}

export default Ingredient;