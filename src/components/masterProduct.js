import React from "react";
export const MasterProduct = props => {
  return (
    <div className="product row  padding md-2">
      <h1 className="border border-danger  col-12">
        Type Of Product:{props.item.type}
      </h1>
      <p className="col-12 violet">
        Name Of The Product : {props.item.name}
      </p>
      <img
        className="set img-circle"
        src={props.item.url}
        alt="SORRY IMAGE NOT AVAILABLE"
      />
      <h4>
        PRICE IS <span className="price">{props.item.price}!</span>
      </h4>
    </div>
  );
};
