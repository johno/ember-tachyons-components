import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t-flag-object-inner', 'Integration | Component | t flag object inner', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-flag-object-inner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t-flag-object-inner}}
      template block text
    {{/t-flag-object-inner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
