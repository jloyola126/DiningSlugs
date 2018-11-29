import React from 'react';
import './DiningHall';
import './Search.css';
import { NavLink} from 'react-router-dom';
import dataList from './search.json'; //importing dataList


export class Search extends React.Component {
    //Set initial States
    constructor(props){
        super(props);
        this.closeMenu = this.closeMenu.bind(this);

        this.state = {
            query: "",
            showMenu: false //we will not show the menu if nothing has been clicked
        }
    }

    //Upon entering information into search bar...
    onchangeOne = e =>{
        this.setState({query: e.target.value}); //Log in target value

        e.preventDefault(); //prevent default event...

        if(e.target.value === ""){ //if target input is blank, don't show Menu
            this.setState({
                showMenu : false 
            })
        }
        else{
            this.setState({
                showMenu : true //Let us display Menu upon input of search bar
            },() => {
                document.addEventListener('click',this.closeMenu) //if a click happens, close menu
            });
        }
    }

    //closeMenu will close based upon event passed in which is a click
    closeMenu(e){
        var searchBarFood = document.getElementById("textField");
        var isFocused = (document.activeElement === searchBarFood);

        if (this.dropdownMenu === null || !this.dropdownMenu.contains(e.target) || !isFocused){
          this.setState({showMenu: false}, () => 
          {
            document.removeEventListener('click',this.closeMenu) //we will need to remove the event listener at this point
          });
        }
    }

    //This function will render our results
    renderResults = r =>{
        return (
        <NavLink to = {`/food/${r}`}>
            <button className="searchButton" id="searchBarFood">{r}</button>
        </NavLink>
        )
    } 

    render() {
        const {query} = this.state; //query is now set to the given state 
        /*
        Declaration of a filtered variable that will look through the data.json
        list and create an array containing only those options that match
        the query result
        */
        const filteredItems = dataList.Ids[this.props.searchWithCode].Food.filter(r=>
            {
                return r.toLowerCase().indexOf(query.toLowerCase()) !== -1
            })
       
        var hallName;
        switch(this.props.searchWithCode){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                hallName = "Current Dining Hall...";
                break;
            default:
                hallName = "All Dining Halls...";       
        }
        var searchText = "Search " + hallName;
        
        return (
            <div>
                <input
                    className = "searchBar"
                    id = "textField"
                    placeholder = {searchText} //Search U.I bar
                    ref = {input => this.search = input}
                    onChange = {this.onchangeOne}
                />
                <div className = "searchBar-content" id="dropDown" ref = {(e) =>{this.dropdownMenu = e}} toggleItem = {this.toggleSelected}> {
                    this.state.showMenu ? (
                        filteredItems.map(r => {
                        return this.renderResults(r) //print out results in a loop
                        })
                    ) : (null)
                }
                </div>
            </div>
        )
    }
}
export default Search;
   

