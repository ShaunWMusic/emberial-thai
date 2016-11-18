import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        const menu = this.store.createRecord('menu-item', { name, goal, description });

        menu.save()
          .then(() => {
            alert('Menu saved!');

            this.transitionToRoute('category.index');
          });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
