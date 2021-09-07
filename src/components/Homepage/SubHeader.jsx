import React,{useEffect} from 'react';
import $ from 'jquery';
import './SubHeader.css';
const SubHeader = () => {
	useEffect(() => {
	 $('.subHead').toggleClass('active');
	}, [])
	return (
		<div>
			<div className='subHead'>Home Page</div>
		</div>
	);
};

export default SubHeader;