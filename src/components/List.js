import React from 'react';
import Element from './Element';

const List = ({ value }) => {
  const ListItem = value.map((elementValue) => (
    <Element
      key={elementValue.toString()}
      value={elementValue}
    />
  ));
  return <ul>{ListItem}</ul>;
};

export default List;
