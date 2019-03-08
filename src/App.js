import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
    <RecipeList recipeList={this.props.masterRecipeList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterRecipeList: state
  };
};

App.propTypes = {
  masterRecipeList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
