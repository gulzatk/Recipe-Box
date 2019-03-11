import React from 'react';
import { NavLink } from 'react-router-dom';
import UIkit from "uikit";
import './styles/Header.css';

UIkit.navbar();
UIkit.dropdown();

function Header(props) {
    return (
        <div>
        <h1 className="title">
            Your Dayli Meal.
        </h1>
        <hr/>
                       <nav className="uk-navbar-container" uk-navbar>
                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><NavLink to="/">Home</NavLink></li>
                            <li>
                                <NavLink to="/">Recipes</NavLink>                               <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><NavLink to="#">All recipes</NavLink></li>
                                        <li><NavLink  to="/">Apetizers</NavLink></li>
                                        <li><NavLink  to="/">Salads</NavLink></li>
                                        <li><NavLink  to="/">Soups</NavLink></li>
                                        <li><NavLink  to="/">Meat</NavLink></li>
                                        <li><NavLink  to="/">Seafood</NavLink></li>
                                        <li><NavLink  to="/">Vegeterian</NavLink></li>
                                        <li><NavLink  to="/">Desserts</NavLink></li>
                                    </ul>
                                </div>
                           </li>
                            <li><NavLink  to="/new">Add recipe</NavLink></li><br/>
                            <li><NavLink   to="/">Your Weekly Menu</NavLink></li>
                      </ul>

                    </div>
                </nav>
            </div>
    )
}

export default Header;