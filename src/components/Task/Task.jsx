import React from 'react';
import './Task.css';

const Item = ({ item }) => (
  <li>
    <h3>{item.task}</h3>
    <p>{item.description}</p>
  </li>
);

export default Item;
