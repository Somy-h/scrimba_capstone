import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
//import 'https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css';
import Header from "./components/Header";//
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

// # Image attributions:
// https://picsum.photos/

// https://unsplash.com/

// # GitHub repo of images and JSON file
// https://github.com/bobziroll/scrimba-react-bootcamp-images

// # Icon library
// https://remixicon.com/

// Old URL
// https://cdn.remixicon.com/releases/v2.1.0/remixicon.css

// New URL
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css



// # Libraries
// * React Router - https://reacttraining.com/react-router/web/guides/quick-start
// * PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route axact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
