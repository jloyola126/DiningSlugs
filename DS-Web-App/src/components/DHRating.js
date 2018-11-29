//This component renders the ratings for the dining hall based on googles data
import React from 'react';
import Ratings from 'react-ratings-declarative';
import './DHRating.css'

//Data from googles api containing the ratings and reviews information
const data = require('./dhRating.json');
const ratings = data.Halls;

export class DHRating extends React.Component {
    constructor(props){
        super(props);
    }
    
    findStars(hall) {
        /*
        Returns the number of stars a dining hall has
        Arguments:
            Hall (int) - hall number that corresponds to a dining hall
            9/10 - 0, cowell-stevenson - 1, crown-merrill - 2, porter-kresge - 3, rcc-oakes - 4
        Returns:
            ratingObj (Dictionary) - has the overall number of stars a dining hall has and the number of reviews the dining hall has
        Raises:
            None
        */
        const ratingObj = ratings[hall];
        return ratingObj
    }

    displayRatings(){
        var x = document.getElementById("");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    //Renders specific information based on what dining hall
    render(){
        /*
        Renders the rating and number of reviews a dining hall has 
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the ratings viewed as stars and the number of reviews based on Googles data
        Raises:
            None
        */
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct information
        var hall;
        switch(this.props.hall){
            case "9/10":
                hall = 0;
                break;
            case "Cowell/Stevenson":
                hall = 1;
                break;
            case "Crown/Merrill":
                hall = 2;
                break;
            case "Porter/Kresge":
                hall = 3;
                break;
            default:
                hall = 4;       
        }

        //The ratings and reviews for each dining hall and the number of stars
        const ratingObj = this.findStars(hall);
        var ratings = ratingObj["Rating"];
        var reviews = ratingObj["Reviews"];

        //Return the rendered component
        return(
            <div className="dinRatings">
                <div> 
                    Rating: <Ratings  
                        rating = {ratings}
                        widgetRatedColors = 'rgb(253, 199, 0)'
                        widgetEmptyColors = 'rgb(203, 211, 227)'
                        widgetHoverColors = 'rgba(255, 219, 86, 0)'
                        widgetDimensions = '3vmin'
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </div>
                <div className="numReviews">
                    Google Reviews: {reviews}
                </div>
            </div>            
        );
    }
}