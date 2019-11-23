import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = () => {
  const [ingredients, setIngredients] = useState();
  const conversionArray = [
    { Teaspoons: 1 },
    { Tablespoons: 3 },
    { Cups: 48 },
    { Pints: 96 },
    { Quarts: 192 },
    { Gallons: 384 }
  ];

  useEffect(() => {
    axios.get('http://localhost:6666/api/conversions').then((res) => {
      setIngredients(res.data);
    });
  }, []);

  if (!ingredients) {
    return <div>Loading ingredients...</div>;
  }
  
  return (
    <div>
      <input type='text' />

      <select name='units'>
        {conversionArray.map((unit) => (
          <option value={unit[Object.keys(unit)[0]]}>
            {Object.keys(unit)[0]}
          </option>
        ))}
      </select>

      <select name='ingredients'>
        {ingredients.map((ingredient) => (
          <option value={ingredient.gramspertsp} key={ingredient.id}>
            {ingredient.ingredient}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
