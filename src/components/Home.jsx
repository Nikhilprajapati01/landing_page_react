import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home_container">
        <div className="content">
    
            <h3>YOUR FEET DESERVE THE BEST</h3>
          
         <div className="content_para">
         <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
         </div>
          
            <div className="btns">
              <button className="shopbtn">Shop Now</button>
              <button  className="catogorybtn">catagory</button>
            </div>

            <div className="icons">
                <span>Also avalable on</span>
               
            </div>
         
        </div>
        <div className="shoeimg">
          <img src="/image/shoe_image.png" alt="shoes" />
        </div>
      </div>
    </>
  );
}

export default Home;
