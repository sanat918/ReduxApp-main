import React from "react";

const Header = (props) =>{
    // console.log("HEADER", props.data, props.data.length);
    const countItem = props.data.length;
return (<>
  <div className="add-to-cart">
            <span className="cart-count">{countItem}</span>
            <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1013293.jpg" alt="Cart IMG" />
        </div>

</>);
}
export  default Header;