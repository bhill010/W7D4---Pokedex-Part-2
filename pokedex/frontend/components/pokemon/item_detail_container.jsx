import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail.jsx';
import {selectPokemonItem} from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.params.itemId;
  return {items: selectPokemonItem(state, itemId)};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
