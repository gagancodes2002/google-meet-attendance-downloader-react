import React,{useState,useEffect} from 'react';
import $ from 'jquery';
import '../Checkbox/Bar.css';
import { Component } from 'react';
const Bar = () => {
	
	
	const [barState,setBarState] = useState({
		active : false
	})
	const getState = () =>
	{

		$('.hamburger').hasClass('is-active') ? setBarState({active : true}) : setBarState({active : false});
			  
	}
	useEffect(() =>
	{
		$('.hamburger').on('click',function()
		{
			$('.hamburger').toggleClass('is-active');
			getState();
		})
		// $(document).ready(function(){
		// 	$(".hamburger").click(function(){
		// 	  $(this).toggleClass("is-active");
		// 	  getState()
		// 	});
		//   });
	},[])
	return (
		<div>
		  <div className="hamburger" id="hamburger-3">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
		</div>
	);
};


export default Bar;