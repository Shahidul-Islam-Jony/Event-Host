import roket from "../../../assets/image/roket.png"
import bkash from "../../../assets/image/bkash.webp"
import nogod from "../../../assets/image/nogod.jpg"

const Ticketing = () => {
    return (
        <div className="my-28 pt-4 bg-gradient-to-b from-white from-10% to-gray-400 to-100% rounded-lg">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">SIMPLIFY TICKETING</h2>
                <p className="text-gray-400 text-lg">First Ever Unique QR Ticketing <br />Platform For Event Registration & Booking</p>
                <button className="btn btn-primary mt-4 mb-10">Secure Payment With</button>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:justify-evenly mt-20 relative">
                <div className="mx-auto">
                    <img src={roket} className="rounded-2xl lg:rounded-t-2xl w-96 h-96" alt="" />
                    <div className="w-20 h-4 rounded-full bg-white absolute top-4 left-[39%] md:left-[44%] lg:left-[23%] "></div>
                </div>
                <div className="lg:absolute -top-16 mx-auto">
                    <img src={bkash} className="rounded-2xl lg:rounded-t-2xl w-96 h-[448px]" alt="" />
                    <div className="w-20 h-4 rounded-full bg-white absolute top-[33%] left-[39%] md:left-[44%] lg:top-4 lg:left-[38%] "></div>
                </div>
                <div className="mx-auto">
                    <img src={nogod} className="rounded-2xl lg:rounded-t-2xl w-96 h-96" alt="" />
                    <div className="w-20 h-4 rounded-full bg-white absolute top-[70%] left-[39%] md:left-[44%] lg:top-4 lg:left-[72%] "></div>
                </div>
            </div>
        </div>
    );
};

export default Ticketing;