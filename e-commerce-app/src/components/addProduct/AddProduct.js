import "../../styles/addProduct/AddProduct.css";
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs, addDoc, deleteDoc, doc
} from 'firebase/firestore'
import {getStorage, ref, uploadBytesResumable} from 'firebase/storage'
const AddProduct = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAdeakazVQzsIi5XvuQZ-E6qbTRlQlsldE",
        authDomain: "e-commerce-app-5f8b3.firebaseapp.com",
        projectId: "e-commerce-app-5f8b3",
        storageBucket: "e-commerce-app-5f8b3.appspot.com",
        messagingSenderId: "451377285469",
        appId: "1:451377285469:web:8a66a9a81613906e5a40b4"
    };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, 'products');

    const storage = getStorage(app);

    const addNewProduct = (e) => {
            e.preventDefault();
            let productGender = document.getElementById('productGender');
            let genderValue = productGender.options[productGender.selectedIndex].value;
            let productType = document.getElementById('productType');
            let typeValue = productType.options[productType.selectedIndex].value;
            let productName = document.getElementById("productName");
            let nameValue = productName.value;
            let productPrice = document.getElementById("productPrice");
            let priceValue = productPrice.value;
            let productImageFolder = document.getElementById("productImageFolder");
            let imageFolderValue = productImageFolder.value;
            let productSizes = []
            let productSizesCheckbox = document.querySelectorAll('input[name=productSizes]:checked')
            let productImgName = document.getElementById("addProductimg");

            for(let i = 0; i<productImgName.files.length; i++){
                const storageRef = ref(storage,`/productImages/${productImageFolder.value}/${productImgName.files[i].name}`);
                const uploadTask = uploadBytesResumable(storageRef, productImgName.files[i]);
                uploadTask.on("state_change", (snapshot) => {
                    const prog = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                })
            }

            for (var i = 0; i < productSizesCheckbox.length; i++) {
                productSizes.push(productSizesCheckbox[i].value)
            }

            var productColors = []
            var productColorsCheckbox = document.querySelectorAll('input[name=productColors]:checked')

            for (var a = 0; a < productColorsCheckbox.length; a++) {
                productColors.push(productColorsCheckbox[a].value)
            }
            
            addDoc(colRef, {

                productGender: genderValue,
                productType: typeValue,
                productName: nameValue,
                productPrice: priceValue,
                productImageFolder: imageFolderValue,
                productSizes: productSizes,
                productColors: productColors
            });    
        }

        const deleteProduct = (e) => { 
            let productId = document.getElementById("productDeleteId").value;

            e.preventDefault();
            const docRef = doc(db, 'products', productId);

            deleteDoc(docRef);
        }

    return (
        
        <div className="addProduct">
            <div className="addProductItems">
                <form onSubmit={addNewProduct}>
                <p style={{backgroundColor: "rgb(132, 168, 117)", padding: "10px 20px", color: "#fff", fontSize: "20px", borderRadius: "25px"}}>Add New Product</p>
                    <select id="productGender" required>
                        <option hidden>Select Men, Women or Kids</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                    <select id="productType" required>
                        <option hidden>Select type of clothing</option>
                        <option value="Shirt">Shirt</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Sweater">Sweater</option>
                    </select>
                    <input type="text" className="addProductInput" name="productName" id="productName" placeholder="Enter product name" required/>
                    <input type="number" className="addProductInput" name="productPrice" id="productPrice" placeholder="Enter product price (€)" required/>
                    <input type="text" className="addProductInput" name="productImageFolder" id="productImageFolder" placeholder="Please enter a name for image folder" required/>
                    <div className="addProductSizes" required>
                        <label htmlFor="ssize">
                            <input type="checkbox" id="ssize" value="S" name="productSizes"/>
                            S
                        </label>
                        <label htmlFor="msize">
                            <input type="checkbox" id="msize" value="M" name="productSizes"/>
                            M
                        </label>
                        <label htmlFor="lsize">
                            <input type="checkbox" id="lsize" value="L" name="productSizes"/>
                            L
                        </label>
                        <label htmlFor="xlsize">
                            <input type="checkbox" id="xlsize" value="XL" name="productSizes"/>
                            XL
                        </label>
                    </div>
                    <div className="addProductColors" required>
                        <label htmlFor="black">
                            <input type="checkbox" id="black" value="black" name="productColors"/>
                            Black
                        </label>
                        <label htmlFor="white">
                            <input type="checkbox" id="white" value="white" name="productColors"/>
                            White
                        </label>
                        <label htmlFor="red">
                            <input type="checkbox" id="red" value="red" name="productColors"/>
                            Red
                        </label>
                        <label htmlFor="blue">
                            <input type="checkbox" id="blue" value="blue" name="productColors"/>
                            Blue
                        </label>
                    </div>
                    <div className="addProductImages">
                        <input id="addProductimg" type="file" multiple placeholder="Add profile picture" required/>
                        <label htmlFor="addProductimg">Add product images</label>
                    </div>
                    <button type="submit">Submit Product</button>
                </form>
                {/* <form onSubmit={deleteProduct} className="delete">
                    <label htmlFor="productDeleteId">Document id:</label>
                    <input type="text" name="id" id="productDeleteId" required/>
                    <button>Delete a Product</button>
                </form> */}
            </div>
        </div>
     );
}
 
export default AddProduct;