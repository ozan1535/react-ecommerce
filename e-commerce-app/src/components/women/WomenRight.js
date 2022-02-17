import "../../styles/men/menRight.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, query, orderBy, onSnapshot
} from 'firebase/firestore'

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const WomenRight = ({ setCounted, setFavProduct, setFavProductImages}) => {

  const firebaseConfig = {
    apiKey: "AIzaSyAdeakazVQzsIi5XvuQZ-E6qbTRlQlsldE",
    authDomain: "e-commerce-app-5f8b3.firebaseapp.com",
    projectId: "e-commerce-app-5f8b3",
    storageBucket: "e-commerce-app-5f8b3.appspot.com",
    messagingSenderId: "451377285469",
    appId: "1:451377285469:web:8a66a9a81613906e5a40b4"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, 'products');

  const q = query(colRef, orderBy("productImageFolder", "asc"))

  let [products, setProducts] = useState([]);
  let [showProducts, SetShowProducts] = useState(8);
  let [kidProducts, setKidProducts] = useState([]);

  const showMoreItems = () => {
    if(showProducts + 1 <= imgFolderRef.length) {
    SetShowProducts((prevValue) => prevValue + 4)
    let manRight = document.querySelector(".menRight");
    manRight.style.minHeight = manRight.offsetHeight + 600 + "px"; 
    }
  }

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const [imgFolderRef, setImgFolderRef] = useState([])
  
  useEffect(() =>
    onSnapshot(q, (snapshot) =>
     setProducts(snapshot.docs.map((doc) => doc.data()))
    ), [db]);


  const [photoProduct, setPhotoProduct] = useState([]);

  useEffect(() => {

    products.filter(product => product.productGender.includes("Women")).forEach((product) => {
      setPhotoProduct((a) =>[...a, product]);
      setKidProducts((b) => [...b, product]);
    })
  }, [products])

  useEffect(() => {
  photoProduct.forEach((photo) => {
    setImgFolderRef((imgFolderRef) => [...imgFolderRef, `productImages/${photo.productImageFolder}/1_org_zoom.jpg`]);
  })
}, [photoProduct]);

  let [exArr, setExArr] = useState([]);

  useEffect(() => {
  imgFolderRef.forEach((imgFolder) => {
    getDownloadURL(ref(storage, imgFolder))
      .then((url) => {
          setExArr((oldArr) => [...oldArr, url].sort())
      })
  })
  }, [imgFolderRef]);

  let countProduct = 0;

  products.filter(product => product.productGender.includes("Women")).forEach(() => {
    countProduct++;
  })

  setCounted(countProduct);
  let [iconClick, setIconClick] = useState(false);


  const changeHeart = (a, product, picture) => {
    a.target.classList.toggle("fas");
    setIconClick(true);
    setFavProduct((a) => [...a, product]);
    setFavProductImages((b) => [...b, picture])
  }

  console.log(exArr);


  return (
    <div className="menRight">

      {
        kidProducts.slice(0, showProducts).map((product, index) => (
          <div className="menRightCard" key={index}>
            <div className="menRightCardimg">
              <div className="heartIcon">
                <i title="Add to Favourites" className="far fa-heart" onClick={(a) => changeHeart(a,product,exArr[index])}></i>
              </div>
              <Link to={{
                pathname: `/productBuy`,
                state: { product, iconClick }
              }}>

                <img src={exArr[index]} alt="" /></Link>
            </div>
            <Link to={{
              pathname: `/productBuy`,
              state: { product, iconClick }
            }}
            >
              <div className="menRightCardInfo">
                <p className="productInfo">
                  {product.productName}
                </p>
                <p className="productPrice">
                  €{product.productPrice}
                </p>
              </div>
            </Link>
          </div>
        ))
      }
      <div className="loadMore">
        <button onClick={showMoreItems}>Load More Products</button>
      </div>
    </div>
  );
}

export default WomenRight;