import Banner from "../../components/Home/Banner/Banner";
import EventShedule from "../../components/Home/EventShedule/EventShedule";
import EventWoD from "../../components/Home/Events/EventWoD";
// import Events from "../../components/Home/Events/Events";
import QRScanner from "../../components/Home/QRScanner/QRScanner";
import Ticketing from "../../components/Home/Ticketing/Ticketing";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            {/* <Events></Events> */}
            <EventWoD></EventWoD>
            <EventShedule></EventShedule>
            <QRScanner></QRScanner>
            <Ticketing></Ticketing>
        </div>
    );
};

export default Home;