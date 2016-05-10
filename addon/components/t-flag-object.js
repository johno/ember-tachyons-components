import Ember from 'ember';
import layout from '../templates/components/t-flag-object';

export default Ember.Component.extend({
  layout,
  collapse: 'none',
  classNameBindings: [
    'isCollapseNone:dt',
    'isCollapseSmall:dt-m',
    'isCollapseSmall:dt-l',
    'isCollapseMedium:dt-l'
  ],

  type: 't-flag-object-inner',

  isCollapseNone: Ember.computed('collapse', function() {
    return this.get('collapse') === 'none';
  }),

  isCollapseSmall: Ember.computed('collapse', function() {
    return this.get('collapse') === 's';
  }),

  isCollapseMedium: Ember.computed('collapse', function() {
    return this.get('collapse') === 'm';
  })
});
