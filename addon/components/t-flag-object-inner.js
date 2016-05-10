import Ember from 'ember';
import layout from '../templates/components/t-flag-object-inner';

export default Ember.Component.extend({
  layout,
  classNameBindings: [
    'isCollapseNone:dtc',
    'isCollapseSmall:dtc-m',
    'isCollapseSmall:dtc-l',
    'isCollapseSmall:v-mid-m',
    'isCollapseSmall:v-mid-l',
    'isCollapseMedium:dtc-l',
    'isCollapseMedium:v-mid-l'
  ],

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
