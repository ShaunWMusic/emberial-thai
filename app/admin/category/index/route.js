import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
  {
    name: 'Small Plates',
    menuItems: [
      {
        name: 'Poke',
        price: 11,
        description: 'Tuna, Sesame Chicharron, Chili Oil, Apple, Raddish',
      },
      {
        name: 'Pork Gyoza',
        price: 7,
        description: 'Contry Ponzu',
      },
    ]
  },
  {
    name: 'Main Courses',
    menuItems: [
      {
        name: 'Super Salad',
        price: 6,
        description: 'Cabbage, Bacon, Egg, Nori Green Goddess'
      },
      {
        name: 'Buttered Noodles',
        price: 9,
        description: 'Miso Butter, Pepper, Hand Pulled Noodles'
      },
      {
        name: 'Hot Chicken',
        price: 12,
        description: 'Fried Chicken Breast, Nashville Spices'
      },
    ]
  }
]

  }
});
