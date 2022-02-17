import "../../styles/favourites/favourites.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, query, orderBy, onSnapshot
} from 'firebase/firestore'

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Search = ({productSearch}) => {

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

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const [imgFolderRef, setImgFolderRef] = useState([])

    useEffect(() =>
        onSnapshot(q, (snapshot) =>
            setProducts(snapshot.docs.map((doc) => doc.data()))
        ), [db]);


    const [photoProduct, setPhotoProduct] = useState([]);
    let lowerProductSearch = productSearch.toLowerCase();

    useEffect(() => {
        
        products.filter(product => product.productName.toLowerCase().includes(lowerProductSearch)).forEach((product) => {
            setPhotoProduct((a) => [...a, product]);
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

    console.log(photoProduct);
    return (
        <div className="favourites">
            <p className="favouritesText" style={{ marginTop: "20px" }}>Search Results</p>
            { photoProduct.length < 1 ? <p style={{
                backgroundColor: "rgb(132, 168, 117)", color: "white",
                padding: "10px 20px", fontSize: "20px", borderRadius: "30px",
                marginBottom: "20px", marginTop: "10px"
            }}>
                You don't have any favourite clothe yet.</p> : ""}
            <div className="favouriteItems">

                {photoProduct.map((product, index) => (
                    <div className="favouriteItemCard">
                        <Link to={{
                            pathname: `/productBuy`,
                            state: { product }
                        }}>
                        <div className="favouriteItemCardimg">
                            <i className="far fa-heart"></i>
                            <img src={exArr[index]} alt="" />
                        </div>
                        <div className="favouriteItemCardInfo">
                            <p className="favouriteItemProductInfo">
                                {product.productName}
                            </p>
                            <p className="favouriteItemProductPrice">
                                ${product.productPrice}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
        </div >
    );
}

export default Search;