import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Men from './components/men/Men';
import Women from './components/women/Women';
import Kids from './components/kids/Kids';
import ProductBuy from './components/buy/ProductBuy';
import Favourites from './components/favourites/Favourites';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import AddProduct from './components/addProduct/AddProduct';
import Search from './components/search/Search';
import { useState, useEffect } from 'react';

function App() {

 const [favProduct, setFavProduct] = useState([]);
 const [favProductImages, setFavProductImages] = useState([]);
 const [productInformation, setProductInformation] = useState([]);
 const [productSearch, setProductSearch] = useState(null);
 const [totalPrice, setTotalPrice] = useState(0);

 useEffect(() => {
   setTotalPrice(0);
  productInformation.forEach((product) => {
      setTotalPrice((a) => a + product[1]);
  })
}, [productInformation])
 
  return (
    <Router>
      <div className="App">
        <Header setProductSearch={setProductSearch} productInformation={productInformation} />
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/checkout"  render={props => <Checkout {...props} productInformation={productInformation} setProductInformation={setProductInformation} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>} /> 
          <Route path="/men" render={props => <Men {...props} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages} />} />
          <Route path="/women" render={props => <Women {...props} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages} />} />
          <Route path="/kids" render={props => <Kids {...props} setFavProduct={setFavProduct} setFavProductImages={setFavProductImages} />} />
          <Route path="/productBuy" render={props => <ProductBuy {...props} productInformation={productInformation} setProductInformation={setProductInformation} />} />
          <Route path="/favourites" render={props => <Favourites {...props} favProduct={favProduct} favProductImages={favProductImages} />} />
          <Route path="/cart" render={props => <Cart {...props} productInformation={productInformation} setProductInformation={setProductInformation} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/search" render={props => <Search {...props} productSearch={productSearch} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
