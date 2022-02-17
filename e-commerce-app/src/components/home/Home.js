import "../../styles/home/home.css";
import HomeBottom from "./HomeBottom";
import HomeMiddle from "./HomeMiddle";
import HomeTop from "./HomeTop";

const Home = () => {
    return ( 
        <div className="home">
            <div className="homeContainer">
                <HomeTop />
                <HomeMiddle />
                <HomeBottom />
            </div>
        </div>
     );
}
 
export default Home;