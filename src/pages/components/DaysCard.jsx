import React from "react";
import { Tilt } from "react-tilt";


function Card(props) {
  return (
    <Tilt>
   
    <div
   
      style={{
        width:"300px",
        
        
        borderRadius: "15px",
        margin: "150px",
        border: "none",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%) hover:from-pink-500 hover:to-orange-500",
      }}

    >
     <center> <img
        src={props.imageURL}
        alt={props.name}
        style={{
          height: "10rem",
          width: "10rem",
         
          transition: "transform 0.3s ease",
        }}
      /></center>

      <div 
        style={{
          
          color: "white",
          fontSize: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "15px",
          textAlign: "center",
          
        }}
      >
        <h2 className="name" style={{ fontSize: "20px", margin: "0", fontWeight: "bold" }}>
          {props.name}
        </h2>
        <p style={{ margin: "5px 0" }}>{props.forecastday.date}</p>
        <p style={{ margin: "5px 0", fontSize: "18px" }}>
          Max: <strong>{props.forecastday.day.maxtemp_c}°C</strong>
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px" }}>
          Min: <strong>{props.forecastday.day.mintemp_c}°C</strong>
        </p>
        <p style={{ margin: "5px 0", fontSize: "18px" }}>
          Wind: <strong>{props.forecastday.day.maxwind_kph} kph</strong>
        </p>
      </div>
    </div>
    </Tilt>
    
  );
}

export default Card;
