import { NavLink } from "react-router-dom";

const Events = () => {
  const arr = [1, 2, 3];
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-4">Events</h2>
        <div className="flex gap-4 md:gap-8 justify-center font-medium">
          <NavLink>All</NavLink>
          <NavLink>For you</NavLink>
          <NavLink>This Day</NavLink>
          <NavLink>This Week</NavLink>
          <NavLink>Music</NavLink>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {arr.map((item, idx) => (
          <div key={idx}>
            <div className="card card-compact bg-base-200 shadow-xl p-4">
              <div className="rounded-t-lg relative border-b-2 border-gray-400 border-dashed pb-4">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-t-lg"
                />
                <span className="bg-blue-400 text-white rounded-md p-1 absolute top-4 left-5">
                  Online
                </span>
                <span className="bg-blue-400 text-white rounded-md p-1 absolute top-4 right-5">
                  Favourite
                </span>
              </div>
              <div className="card-body flex flex-row">
                <div>
                  <h2 className="card-title bg-blue-400  text-white rounded-lg px-2 w-fit">
                    Music
                  </h2>
                  <p>Celebrity Convention Hall</p>
                  <h4 className="text-xl font-bold">ROUFIAN’S HSC-24 RAG DAy</h4>
                </div>
                <div className="bg-white rounded-lg p-4 w-fit">
                    <p>Apr</p>
                    <p className="text-xl text-blue-500 font-bold">20</p>
                    <p>10:00 pm</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button className="btn btn-primary">See Ticket</button>
                <span className="flex flex-row items-center gap-2 bg-white rounded-lg px-2"><p className="text-lg font-bold text-blue-500">20</p>seat <br />Left</span>
                <button className="text-blue-400">See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
