import "../../styles/men/menTop.css"

const KidsTop = ({counted}) => {
    return ( 
        <div className="menTop">
            <div className="menTopInfo">
                <p>Kids - <span> <span>{counted}</span> products are listed</span></p>
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
 
export default KidsTop;