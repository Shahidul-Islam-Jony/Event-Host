import Banner from "../../components/Home/Banner/Banner";
import Events from "../../components/Home/Events/Events";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <Events></Events>
        </div>
    );
};

export default Home;