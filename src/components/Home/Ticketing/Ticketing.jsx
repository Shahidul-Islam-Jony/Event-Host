

const Ticketing = () => {
    return (
        <div className="my-28  min-h-screen py-4 bg-gradient-to-b from-white to-gray-400 rounded-lg">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">SIMPLIFY TICKETING</h2>
                <p className="text-gray-400 text-lg">First Ever Unique QR Ticketing <br />Platform For Event Registration & Booking</p>
                <button className="btn btn-primary mt-4 mb-10">Secure Payment With</button>
            </div>
            <div className="relative">
                <div className="bg-violet-600 min-w-64 min-h-96 absolute">
                    <p>Roket</p>
                </div>
                <div className="bg-pink-600 min-w-64 min-h-96 absolute top-0">
                    <p>Bkash</p>
                </div>
                <div className="bg-orange-500 min-w-64 min-h-96 absolute">
                    <p>Nogod</p>
                </div>
            </div>
        </div>
    );
};

export default Ticketing;