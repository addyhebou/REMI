class Item {
  constructor(description) {
    this.color = description.split(' ')[0].toLowerCase() || null;
    this.type = description.split(' ')[1].toLowerCase() || null;
  }
}

// black & brown shoe, brown & black belt, white shirt

let a = new Item('black shoe');
let b = new Item('blue shoe');
let c = new Item('red shoe');
let d = new Item('purple shoe');
let shoes = [];
shoes.push(a);
shoes.push(b);
shoes.push(c);
shoes.push(d);

const getOutfit = (focus) => {
  let start = getRandomItem(focus);
  // Get random pants
  let;
};

const getRandomItem = (type) => {
  if (type === 'shoes') return shoes[Math.floor(Math.random() * shoes.length)];
};

console.log(getOutfit('shoes'));
