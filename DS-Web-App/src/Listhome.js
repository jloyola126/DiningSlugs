//This renders the user interface for the list of buttons that the user
//can use to navigate between each of the dining halls as well as
//the home page
//Thank to Chandler for the styling
import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';

export class Listhome extends React.Component{

	render() {
		/*
        Renders the quicknav bar at the top of the page
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the 5 quicknav buttons
        Raises:
            None
        */
		return (
			<div>
				<ul class="quickNavList">
					<li class="quickNav">
						<NavLink to = "/" exact>
							Home
						</NavLink>
					</li>	
					<li class="quickNav">
						<NavLink to = "/9-10" exact onClick = {fetch("/9-10")}>
							9/10
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/cowell-stevenson" exact onClick = {fetch("/cowell-stevenson")}>
							Cowell/Stevenson
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/crown-merrill" exact onClick = {fetch("/crown-merrill")}>
							Crown/Merill
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/porter-kresge" exact onClick = {fetch("/porter-kresge")}>
							Porter/Kresge
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/rcc-oakes" exact onClick = {fetch("/rcc-oakes")}>
							Rachel Carson/Oakes
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

