import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewCar from "./NewCar";
import food from "../Assets/food.png";
import money from "../Assets/money.jpg"

const Home = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="text-center">
        <h2 className="text-primary">Our Services</h2>
          
        </div>
        <div className="row">
            <div className="col-10 col-sm-10 col-md-6 col-lg-8">
              
            <h4 className="text-success">Fresh Foods</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, pariatur id commodi maiores mollitia et veniam
              aliquam rem explicabo cupiditate perspiciatis, corrupti corporis!
              Atque ratione iusto necessitatibus, sapiente optio corrupti esse
              sed inventore, quas illo fugit beatae molestiae, explicabo
              pariatur aperiam dolor totam? Nobis at ullam voluptate, illo id
              sint eos unde repellendus debitis ab necessitatibus nostrum
              eligendi eaque? Recusandae id optio cupiditate, nostrum nobis
              architecto magni, omnis, eveniet eum dolorem illum fugit
              perspiciatis veritatis. Maxime animi alias amet necessitatibus
              placeat. Magnam expedita eius vitae, id fugit ipsum tempora ad,
              provident qui commodi a et, cumque corrupti itaque tempore
              ratione!
            </p>
            </div>
            <div className="col-8 col-sm-10 col-md-3 col-lg-3 ms-4 mt-2">
              <img src={food} alt=""  />
          </div>
        </div>

        <hr />

        <div className="row">
        <div className="col-10 col-sm-12 col-md-3 col-lg-3 me-4">
              <img src={food} alt=""  />
          </div>
            <div className="col-10 col-sm-10 col-md-6 col-lg-8 ms-5">
              
            <h4>Fresh Foods</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, pariatur id commodi maiores mollitia et veniam
              aliquam rem explicabo cupiditate perspiciatis, corrupti corporis!
              Atque ratione iusto necessitatibus, sapiente optio corrupti esse
              sed inventore, quas illo fugit beatae molestiae, explicabo
              pariatur aperiam dolor totam? Nobis at ullam voluptate, illo id
              sint eos unde repellendus debitis ab necessitatibus nostrum
              eligendi eaque? Recusandae id optio cupiditate, nostrum nobis
              architecto magni, omnis, eveniet eum dolorem illum fugit
              perspiciatis veritatis. Maxime animi alias amet necessitatibus
              placeat. Magnam expedita eius vitae, id fugit ipsum tempora ad,
              provident qui commodi a et, cumque corrupti itaque tempore
              ratione!
            </p>
            </div>
           
        </div>

        <hr />

         <div className="row">
            <div className="col-10 col-sm-10 col-md-6 col-lg-8">
              
            <h4>Cost Effective</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, pariatur id commodi maiores mollitia et veniam
              aliquam rem explicabo cupiditate perspiciatis, corrupti corporis!
              Atque ratione iusto necessitatibus, sapiente optio corrupti esse
              sed inventore, quas illo fugit beatae molestiae, explicabo
              pariatur aperiam dolor totam? Nobis at ullam voluptate, illo id
              sint eos unde repellendus debitis ab necessitatibus nostrum
              eligendi eaque? Recusandae id optio cupiditate, nostrum nobis
              architecto magni, omnis, eveniet eum dolorem illum fugit
              perspiciatis veritatis. Maxime animi alias amet necessitatibus
              placeat. Magnam expedita eius vitae, id fugit ipsum tempora ad,
              provident qui commodi a et, cumque corrupti itaque tempore
              ratione!
            </p>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-lg-3 ms-4">
              <img src={money} alt=""  />
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Home;
