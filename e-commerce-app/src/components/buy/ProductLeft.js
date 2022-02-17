import "../../styles/buy/productLeft.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { useState, useEffect } from "react";


const ProductLeft = (product) => {
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


    return (
        <div className="productLeft">
            {
                imageURLs.map((image) => (
                    <div className="productLeftPhotos">
                        <img src={Object.values(image)} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
export default ProductLeft;