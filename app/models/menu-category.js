import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  menuItems: DS.hasMany('menu-item'),
});
