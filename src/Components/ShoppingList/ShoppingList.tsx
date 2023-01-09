import React from 'react';
import { shoppingList } from '../../Constants/shoppingList';

export default function ShoppingList() {
  return (
    <div>
      ShoppingList
      {shoppingList.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
