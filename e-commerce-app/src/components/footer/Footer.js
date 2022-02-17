import "../../styles/footer/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footerLeft">
                    <Link to="/">CheapBoutique</Link>
                </div>
                <div className="footerMiddle">
                    <p>Secure Shopping</p>
                    <br />
                    <div className="bankPhotos">
                        <img src="./images/master-card-logo.svg" alt="Master Card Logo" />
                        <img src="./images/visa-logo.svg" alt="Master Card Logo" />
                        <img src="./images/paypal-logo.svg" alt="Master Card Logo" />
                        <img src="./images/klarna-logo.svg" alt="Master Card Logo" />
                        <img src="./images/google-pay-logo.svg" alt="Master Card Logo" />
                        <img src="./images/applepay.svg" alt="Master Card Logo" />
                    </div>
                    <br />
                    <small><i>All prices include VAT</i></small>
                    <br /><br />
                    <div className="securePhoto">
                        <img src="./images/global_sign.png" alt="" />
                    </div>
                </div>
                <div className="footerRight">
                    <p>Social Media</p>
                    <div className="social">
                        <a href="https://www.facebook.com/" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" className="instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/" target="_blank" className="twitter"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" className="youtube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;