import DS from 'ember-data';
import config from 'emberial-thai/config/environment';
export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
});
