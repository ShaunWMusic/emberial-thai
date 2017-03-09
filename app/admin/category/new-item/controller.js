import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      submit(formValues) {
        const newItem = this.store.createRecord('menu-item', formValues);

        newItem.set('menuCategory', this.model);

        newItem.save()
        .then(() => {
          this.transitionToRoute('admin.category.detail', this.model.id);
        });

      },
    },
});
