import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      submit(inputs) {
        const newCategory = this.store.createRecord('menu-category', inputs);

        newCategory.set('category', this.model);

        newCategory.save()
        .then(() => {
          this.transitionToRoute('admin.category.index');
        });

      },
    },
});
