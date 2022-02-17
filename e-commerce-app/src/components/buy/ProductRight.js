import { useState } from "react";
import "../../styles/buy/productRight.css";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { useEffect } from "react";

const ProductRight = (product) => {
    const { productInformation, setProductInformation } = product;

    const firebaseConfig = {
        apiKey: "AIzaSyAdeakazVQzsIi5XvuQZ-E6qbTRlQlsldE",
        authDomain: "e-commerce-app-5f8b3.firebaseapp.com",
        projectId: "e-commerce-app-5f8b3",
        storageBucket: "e-commerce-app-5f8b3.appspot.com",
        messagingSenderId: "451377285469",
        appId: "1:451377285469:web:8a66a9a81613906e5a40b4"
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);


    let [productNumber, setProductNumber] = useState(1);

    const changeHeart = (a) => {
        a.target.classList.toggle("fas");
        a.target.classList.toggle("far");
    }

    const [imageURLs, setImageURLs] = useState([]);
    useEffect(() => {

        const listRef = ref(storage, `productImages/${product.productInfo.product.productImageFolder}`);
        listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    getDownloadURL(itemRef).then(downloadURL => {
                        setImageURLs(oldOne => [...oldOne, {
                            downloadURL
                        }]);

                    })
                });
            })
    }, []);

    let sizesP = document.querySelectorAll(".sizes > p");
    const [chosenSize, setChosenSize] = useState(null);
    for(let i = 0; i<sizesP.length; i++){
        sizesP[i].addEventListener("click", () => {
            sizesP[i].style.border="1px solid rgb(132, 168, 117)"; 
            setChosenSize(sizesP[i].innerText);
        })
    }

    let addCart = (x,y,z,t) => {
        let animationEffect = document.querySelector(".productDemo");
        
        setProductInformation((a) => [...a, [x,y,z,t, chosenSize]]);
        
        setTimeout(() => {
            animationEffect.classList.add("productAdded");
        }, 100);
        animationEffect.classList.remove("productAdded");
        
    }


    return ( 
        <div className="productRight">
            <div className="productRightContainer">
                <div className="productName">
                    <div className="productNameItems">
                        <p>{product.productInfo.product.productName}</p>
                        <i title="Add to Favourites" className={product.productInfo.iconClick ? "fas fa-heart" : "far fa-heart" } onClick={(a) => changeHeart(a)}></i>
                    </div>
                    <div className="productPrice">
                        <p>$<span>{product.productInfo.product.productPrice}</span></p>
                    </div>
                </div>
                <div className="productColor">
                    <p>Color</p>
                    <div className="productColors">
                        <div className={product.productInfo.product.productColors.includes("black") ? "black" : "black colorOpacity"}></div>
                        <div className={product.productInfo.product.productColors.includes("white") ? "white" : "white colorOpacity"}></div>
                        <div className={product.productInfo.product.productColors.includes("red") ? "red" : "red colorOpacity"}></div>
                        <div className={product.productInfo.product.productColors.includes("blue") ? "blue" : "blue colorOpacity"}></div>
                    </div>
                </div>
                <div className="productSize">
                    <p>Size</p>
                    <div className="sizes">
                        <p className={product.productInfo.product.productSizes.includes("S") ? "" : "colorOpacity"}>S</p>
                        <p className={product.productInfo.product.productSizes.includes("M") ? "" : "colorOpacity"}>M</p>
                        <p className={product.productInfo.product.productSizes.includes("L") ? "" : "colorOpacity"}>L</p>
                        <p className={product.productInfo.product.productSizes.includes("XL") ? "" : "colorOpacity"}>XL</p>
                    </div>
                </div>
                <div className="productAddCart">
                    <button onClick={() => addCart(product.productInfo.product.productName,product.productInfo.product.productPrice * productNumber,productNumber,imageURLs[0])}>Add to Cart - $<span>{product.productInfo.product.productPrice * productNumber}</span></button>
                    <div className="quantity">
                        <span style={{ visibility: productNumber <= 1 ? 'hidden' : '' }} onClick={() => productNumber <= 1 ? setProductNumber(1) : setProductNumber(productNumber - 1)}>-</span><span>{productNumber}</span><span onClick={() => setProductNumber(productNumber + 1)}>+</span>
                    </div>
                </div>
                <p className="productDemo">Product Added</p>
            </div>
        </div>
     );
}
 
export default ProductRight;