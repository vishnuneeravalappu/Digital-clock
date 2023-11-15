import React from "react";
import './style.css';

export class TimeCard extends React.PureComponent{
	render(){
		const {time} = this.props
		return(
			<div className="time-card-container">
				<span>{time}</span>
			</div>
			)
	}
}