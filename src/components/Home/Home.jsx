import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="custom-bgc flex gap-10">
      {/* card 01 */}
      <div className="m-[100px]">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* card 02 */}
      <div className="mt-[100px]">
        <div className="card w-96 glass">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
