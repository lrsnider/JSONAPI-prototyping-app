import DS from 'ember-data';
const { Model, attr, hasMany } = DS;
export default Model.extend({
  'firstName': attr('string'),
  'lastName': attr('string'),
  'email': attr('string'),
  'company': attr('string'),
})
