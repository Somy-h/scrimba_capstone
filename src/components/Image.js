import React, {useState, useContext} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({className, img}) {

  //const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const {cartItems, toggleFavorite, addToCart, removeFromCart} = useContext(Context);

  //const heartIcon = hovered && <i className={`${img.isFavorite ? "ri-heart-fill" : "ri-heart-line"} favorite`} onClick={toggleFavorite(img.id)}></i>;
  
  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>;
    } else if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>;
    }
  }

  //const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>;
  function cartIcon() {
    const item = cartItems.find(cartItem => cartItem.id === img.id)

    if (item) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>;
    }
  } 

  return (
    <div 
      className={`${className} image-container`}
      ref={ref}
    >
      { heartIcon() }
      { cartIcon() }
      <img src={img.url} className="image-grid"/>
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}



export default Image