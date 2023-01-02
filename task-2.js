const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const listRef = document.querySelector('#ingredients');

  ingredients.map(ingradient => {
    const itemEl = document.createElement('li');
    const textEl = document.createElement('p');
    itemEl.appendChild(textEl); 
     textEl.textContent = ingradient;
     listRef.appendChild(itemEl)
 }
 )