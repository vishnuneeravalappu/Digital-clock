import React from 'react';

export const TimeSeperator =()=> {
	return(
		<span className="time-seperator">:</span>
		)
}

export const Meridium =({meridium})=> {
	return(
		<span className="time-meridium">{meridium}</span>
		)
}