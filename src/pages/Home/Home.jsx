import Banner from "../../components/Home/Banner/Banner";
import Events from "../../components/Home/Events/Events";
import QRScanner from "../../components/Home/QRScanner/QRScanner";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <Events></Events>
            <QRScanner></QRScanner>
        </div>
    );
};

export default Home;