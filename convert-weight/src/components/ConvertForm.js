import React, { useState } from 'react';
import Ingredients from './Ingredients';
import Units from './Units';

const ConvertForm = () => {
  const initialConversion = {
    quantity: '',
    units: 1,
    ingredients: 0
  }
  const [conversion, setConversion] = useState(initialConversion);
  const [display, setDisplay] = useState('0');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(
      (conversion.quantity * conversion.units * conversion.ingredients).toFixed(
        0
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='quantity'
          value={conversion.quantity}
          min='0'
          step='.01'
          placeholder='0'
          autoComplete='off'
          onChange={(e) => {
            setConversion({ ...conversion, quantity: e.target.value });
            setDisplay('0');
          }}
        />
        <select
          name='units'
          value={conversion.units}
          onChange={(e) => {
            setConversion({ ...conversion, units: e.target.value });
            setDisplay('0');
          }}>
          <Units />
        </select>
        <select
          name='ingredients'
          value={conversion.ingredients}
          onChange={(e) => {
            setConversion({ ...conversion, ingredients: e.target.value });
            setDisplay('0');
          }}>
          <Ingredients />
        </select>
        <button type='submit'>Submit</button>
        <button type='clear' onClick={() => {
            setConversion(initialConversion);
            setDisplay('0');
          }}>Clear</button>
      </form>
      <h2>{display} grams</h2>
    </div>
  );
};

export default ConvertForm;
