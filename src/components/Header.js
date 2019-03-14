import React from "react";
import { NavLink } from "react-router-dom";
import UIkit from "uikit";
import "./styles/Header.css";

UIkit.navbar();
UIkit.dropdown();

function Header() {
  return (
    <div className="bodyStyle">
      <div className="grid-container">
        <NavLink to="/">
          <h1 className="title">Your Dayli Meal.</h1>
        </NavLink>
        <div className="searchStyle">
          <label>Find a recipe: </label>
          <input className="search" type="text" placeholder="search..." />
        </div>
      </div>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">All Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/">Special Diets</NavLink>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active">
                    <NavLink to="#">Dairy Free</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Vegan</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Vegetarian</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Seafood</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/">Appetizers</NavLink>
            </li>
            <li>
              <NavLink to="/">Salads</NavLink>
            </li>
            <li>
              <NavLink to="/">Soups</NavLink>
            </li>
            <li>
              <NavLink to="/">Main Dish</NavLink>
            </li>
            <li>
              <NavLink to="/">Desserts</NavLink>
            </li>
            <li>
              <NavLink to="/new">Add New Recipe</NavLink>
            </li>
            <br />
            <li>
              <NavLink to="/">Your Weekly Menu</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
