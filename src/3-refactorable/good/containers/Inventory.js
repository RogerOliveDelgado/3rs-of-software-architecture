import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction, changeCurrencyAction } from '../actions';

import CurrencyConverter from '../lib/CurrencyConverter';
import Inventory from '../components/Inventory';

const InventoryContainer = (
  {
    inventory,
    currencies,
    localCurrency,
    addToCart,
    changeCurrency,
  },
) => (
  <Inventory
    currencyConverter={new CurrencyConverter(currencies)}
    inventory={inventory}
    localCurrency={localCurrency}
    changeCurrency={currency => changeCurrency(currency)}
    addToCart={productId => addToCart(productId)}
  />
);

InventoryContainer.propTypes = {
  currencies: React.PropTypes.object.isRequired,
  inventory: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
  changeCurrency: React.PropTypes.func.isRequired,
  addToCart: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  inventory: state.inventory,
  currencies: state.currencies,
  localCurrency: state.localCurrency,
});

export default connect(mapStateToProps, {
  addToCart: addToCartAction,
  changeCurrency: changeCurrencyAction,
})(InventoryContainer);
