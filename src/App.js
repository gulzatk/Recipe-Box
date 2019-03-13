import React from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import NewRecipeForm from './components/NewRecipeForm';
import { pseudoRandomBytes } from 'crypto';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import "../node_modules/uikit/dist/css/uikit.css";



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { };

  //   this.handleLikesChange = this.handleLikesChange.bind(this);
  //   this.handleDisLikesChange = this.handleDisLikesChange.bind(this);
  // }


  // handleLikesChange(id) {
  //   for (let recipe of this.state.masterRecipeList) {
  //     if (recipe.id === id) {
  //       recipe.likes++;
  //       let newState = Object.assign({}, this.state.masterRecipeList, recipe);
  //       this.setState({ newState });
  //     }
  //   }
  // }

  // handleDisLikesChange(id) {
  //   for (let recipe of this.state.masterRecipeList) {
  //     if (recipe.id === id) {
  //       recipe.dislikes++;
  //       let newState = Object.assign({}, this.state.masterRecipeList, recipe);
  //       this.setState({ newState });
  //     }
  //   }
  // }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <RecipeList recipeList={this.props.masterRecipeList}
              changeLikes={this.handleLikesChange}
              changeDisLikes={this.handleDisLikesChange}/>}
          />
          <Route path='/new' render = {() => <NewRecipeForm     />} />
        </Switch>
        </div>
    );
  }
}



export default App;