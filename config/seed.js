require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Cats', sortOrder: 10},
    {name: 'Dogs', sortOrder: 20},
    {name: 'Bunnies', sortOrder: 30},
    {name: 'Fish', sortOrder: 40},
    {name: 'Birds', sortOrder: 50},
    {name: 'Farm Animals', sortOrder: 60},
    {name: 'Exotic Animals', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Orange cat', emoji: '🐈 ', category: categories[0], price: 220.00},
    {name: 'Black Cat', emoji: '🐈‍⬛', category: categories[0], price: 220.00},
    {name: 'Golden Retriever', emoji: '🐕 ', category: categories[1], price: 820.00},
    {name: 'Grey Poodle', emoji: '🐩', category: categories[1], price: 799.00},
    {name: 'Service dog German Sheppard', emoji: '🐕‍🦺', category: categories[1], price: 2899.00},
    {name: 'White Snow Bunny', emoji: '🐇', category: categories[2], price: 159.00},
    {name: 'Gray Bunny', emoji: '🐰', category: categories[2], price: 159.00},
    {name: 'Shrimp', emoji: '🦐', category: categories[3], price: 10.00},
    {name: 'Betta Fish', emoji: '🐠', category: categories[3], price: 25.00},
    {name: 'Guppie', emoji: '🐟', category: categories[3], price: 8.00},
    {name: 'Chick', emoji: '🐤', category: categories[4], price: 50.00},
    {name: 'Parrot', emoji: '🦜', category: categories[4], price: 200.00},
    {name: 'Rooster', emoji: '🐓', category: categories[4], price: 110.00},
    {name: 'Pig', emoji: '🐖', category: categories[5], price: 8500.00},
    {name: 'Cow', emoji: '🐄', category: categories[5], price: 9000.00},
    {name: 'Steed', emoji: '🐎', category: categories[5], price: 15000.00},
    {name: 'Sheep ', emoji: '🐑', category: categories[5], price: 2699.00},
    {name: 'Goat ', emoji: '🐐', category: categories[5], price: 3000.00},
    {name: 'Peacock', emoji: '🦚 ', category: categories[6], price: 12000.00},
    {name: 'Alligator', emoji: '🐊', category: categories[6], price: 14000.00},
    {name: 'Scorpion', emoji: '🦂', category: categories[6], price: 2999.00},
    {name: 'Bald Eagle', emoji: '🦅', category: categories[6], price: 20000.00},
  ]);

  console.log(items)

  process.exit();

})();