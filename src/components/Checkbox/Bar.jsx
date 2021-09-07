import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../Checkbox/Bar.css";
import { Component, useContext } from "react";

const Bar = ({parentCallback , setStatus}) => {
  const [barState, setBarState] = useState({
    active: false,
  });
    
  useEffect(() => {

	setBarState({active : setStatus});
	console.log('Component Did Mount and setStatus');
  }, [setStatus])
  return (
     
	
      
      <div 
      onClick={() => {
        setBarState({
          active: barState.active ? false : true,
        },parentCallback(barState));

		 
      }}
        className={barState.active ? "hamburger is-active" : "hamburger"}
        id="hamburger-3"
		
      >
		 
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
  
  );
};

export default Bar;
