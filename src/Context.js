import React, {useState, useEffect, useContext} from "react"

const Context = React.createContext();
function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, []);
  
  //console.log(allPhotos);

  function toggleFavorite(id) {
   //const photo = allPhotos.find(img => img.id === id);
    const updatedArr = allPhotos.map(photo => 
      //  if (photo.id === id) {
      //   return {
      //     ...photo,
      //     isFavorite: !photo.isFavorite
      //   }
      //  }
      //  return photo

      photo.id === id 
        ?
          {
            ...photo,
            isFavorite: !photo.isFavorite
          }
       : photo
    );
    setAllPhotos(updatedArr);
  }

  function addToCart(img) {
    setCartItems(prevItems => [...prevItems, img]);
  }

  function removeFromCart(id) {
    // const items = [...cartItems];
    // const itemIdx = items.findIndex(item => item.id === id);
    // items.splice(itemIdx, 1);
    // setCartItems(items);

    setCartItems(prevItems => prevItems.filter(item => item.id !==id))
  }

  function emptyCart() {
    setCartItems([]);
  }

  console.dir(cartItems)

  return (
    <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}