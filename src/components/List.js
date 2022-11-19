import React from 'react';
import Element from './Element';

const List = ({ value }) => (
  <div>
    List length: {value.length} <br />
    <Element value={value[0]} />
  </div>
);

export default List;
