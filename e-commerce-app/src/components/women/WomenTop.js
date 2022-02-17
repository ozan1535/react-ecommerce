import "../../styles/men/menTop.css"

const WomenTop = ({counted}) => {
    return ( 
        <div className="menTop">
            <div className="menTopInfo">
                <p>Women - <span> <span>{counted}</span> products are listed</span></p>
                <div className="menTopSelect">
                    <select>
                        <option name="lowest" value="Lowest Price">Lowest Price</option>
                        <option name="highest" value="Highest Price">Highest Price</option>
                    </select>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
     );
}
 
export default WomenTop;