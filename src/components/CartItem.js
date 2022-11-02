import React, {useState, useContext} from "react";
import {Context} from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem ({item}) {
  //const [isHovered, setIsHovered] = useState(false);
  const [hovered, ref] = useHover();
  const {removeFromCart} = useContext(Context);

  return (
    <div className="cart-item">
      <i 
        ref = {ref}
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`} 
        onClick={() => removeFromCart(item.id)}></i>
      <img src={item.url} width="130px"
      />
      <p>$5.99</p>
    </div>

  )
}