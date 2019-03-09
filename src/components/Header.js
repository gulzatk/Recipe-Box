import React from 'react';
import UIkit from 'uikit';
import { Link } from 'react-router-dom';

UIkit.navbar();

function Header(props) {
    return (
        <div>
            <h1>
                This is header.
            </h1>
            <div>
            <nav className="uk-navbar-container" uk-navbar="true" >
                <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><Link style={{ textDecorLinktion: 'none', color: 'blLinkck' }} to="/">Home</Link></li>
                            <li>
                                <Link style={{ textDecorLinktion: 'none', color: 'blLinkck' }} to="/">Recipes</Link>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><Link to="#">All recipes</Link></li>
                                        <li><Link to="/">Apetizers</Link></li>
                                        <li><Link to="/">Salads</Link></li>
                                        <li><Link to="/">Soups</Link></li>
                                        <li><Link to="/">Meat</Link></li>
                                        <li><Link to="/">Seafood</Link></li>
                                        <li><Link to="/">Vegeterian</Link></li>
                                        <li><Link to="/">Desserts</Link></li>
                                    </ul>
                                </div>
                           </li>
                        <li><Link style={{ textDecorLinktion: 'none', color: 'blLinkck' }} to="/new">Add recipe</Link></li><br/>
                        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Your Weekly Menu</Link></li>
                      </ul>

                    </div>
                </nav>
            </div>
     </div>
    )
}

export default Header;