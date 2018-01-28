import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ListItem from './components/ListItem';


export default class HorizontalTabList extends Component {
  getListItems = () =>
    this.props.list.map(item => (
      <ListItem
        title={item.symbol}
        selected={this.props.selectedValue === item.symbol}
        key={`listItem_${item.symbol}`}
        changeSelected={this.changeSelected}
      />
    ));

  changeSelected = title => this.props.changeSelected(title);

  render = () => (
    <ul className="list-inline tablist">
      {this.getListItems()}
    </ul>
  );
}

HorizontalTabList.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSelected: PropTypes.func.isRequired,
};
