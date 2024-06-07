import eventHost from "../../../assets/image/event-host.png";
import { FaCircleCheck } from "react-icons/fa6";
import clock from "../../../assets/image/clock.jpg"

const EventShedule = () => {
  return (
    <div className="bg-blue-600 flex flex-col md:flex-row gap-8 rounded-2xl">
      <div className="lg:h-80">
        <img src={eventHost} className="w-full md:h-[100%] rounded-xl" alt="" />
      </div>
      <div className="text-white relative z-50 overflow-hidden p-7">
        <h3 className="text-4xl">Host Your Event Easily & Automatedly With Us</h3>
        <h5 className="text-2xl my-4">We Provide The Best Event Ticketing & <br />Management Solutions</h5>
        <p className="flex items-center gap-2 mb-2"><FaCircleCheck /> Host Your Event With Easy Steps!</p>
        <p className="flex items-center gap-2 mb-2"><FaCircleCheck /> Host Your Event With Easy Steps!</p>
        <p className="flex items-center gap-2 mb-2"><FaCircleCheck /> Host Your Event With Easy Steps!</p>
        <p className="flex items-center gap-2 mb-2"><FaCircleCheck /> Host Your Event With Easy Steps!</p>
        <div>
            <img src={clock} className="w-20 h-20 lg:w-44 lg:h-44 rounded-full absolute -bottom-7 md:-bottom-6 md:-right-6 lg:-bottom-10 lg:-right-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventShedule;
