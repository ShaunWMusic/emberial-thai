import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        const project = this.store.createRecord('project', { name, goal, description });

        project.save()
          .then(() => {
            alert('Project saved!');

            this.transitionToRoute('project.index');
          });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
