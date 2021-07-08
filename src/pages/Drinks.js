import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';

import { fetchDrinkAction } from '../actions';
import DrinkButtons from '../components/DrinkButtons';

class Drinks extends Component {
  constructor() {
    super();

    this.requisicao = this.requisicao.bind(this);
  }

  componentDidMount() {
    const { resultDrink } = this.props;
    if (!resultDrink) this.requisicao();
  }

  requisicao() {
    const { requestDrinkRecipes } = this.props;
    requestDrinkRecipes();
  }

  render() {
    const { resultDrink } = this.props;
    return (
      <>
        <section>
          <Header title="Bebidas" />
        </section>
        <DrinkButtons />
        {resultDrink ? <DrinkCard /> : null}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  resultDrink: state.drink.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  requestDrinkRecipes: () => (dispatch(fetchDrinkAction())),
});

Drinks.propTypes = {
  requestDrinkRecipes: PropTypes.func.isRequired,
  resultDrink: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
