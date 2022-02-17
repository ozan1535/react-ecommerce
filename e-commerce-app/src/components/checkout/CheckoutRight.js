import "../../styles/checkout/checkoutRight.css";

const CheckoutRight = ({setTotalPrice, productInformation, setProductInformation}) => {
    let displayNone = (a) => {    
        setTotalPrice((x) => x - productInformation[a][1]);
        setProductInformation(productInformation.slice(0,a).concat(productInformation.slice(a+1)));
        console.log(productInformation.length)
        if(productInformation.length <= 1) {
            alert("You have nothing to buy... You will be redirected to homepage.");
            window.open("http://localhost:3000/", "_self");
        }
    }

    return ( 
        <div className="yourCartLeft">
            <div className="yourCartLeftText">
                <p>Your Cart</p>
            </div>

       {productInformation.length < 1 ? <p className="nothingtoShow">Nothing to show here yet...</p> : null}


        {productInformation.map((product,index) => (
            <div className="yourCartLeftItems" key={index} id={index}>
                <div className="yourCartLeftItemsimg">
                    <img src={product[3].downloadURL} alt="" />
                </div>
                <div className="yourCartLeftItemsinfo">
                    <div className="yourCartLeftItemsinfoTop">
                        <p className="yourCartLeftItemsinfoTopTitle">{product[0]}</p>
                        <p className="yourCartLeftItemsinfoTopTitle" style={{color: "black"}}>Size: <span>{product[4]}</span></p>
                        <p className="yourCartLeftItemsinfoTopTitle" style={{color: "black"}}>Quantity: <span>{product[2]}</span></p>
                    </div>
                    <div className="yourCartLeftItemsinfoBottom">
                        <p>$<span className="yourCartLeftItemsinfoTopTitle" >{product[1]}</span></p>
                        <p onClick={() => displayNone(index)}>Remove</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default CheckoutRight;