import React from "react";

function BikeCard({name,price}){

    console.log(name,"Rendered");

    return(

        <div className="card">

            <h3>{name}</h3>

            <p>₹{price}</p>

        </div>

    )

}

export default React.memo(BikeCard);