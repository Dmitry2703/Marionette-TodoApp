/**
 * @fileOverview Layout View
 */

import Mn from 'backbone.marionette';
import layout from '../templates/layout.jst';
import ListView from './list.js';
import FormView from './form.js';

export default Mn.View.extend({
  template: layout,

  regions: {
    list: '.list',
    form: '.form'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onRender() {
    const listView = new ListView({
      collection: this.collection
    });
    const formView = new FormView({
      model: this.model
    });

    this.showChildView('list', listView);
    this.showChildView('form', formView);
  },

  onChildviewAddTodoItem(child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});

    let items = this.model.pick('assignee', 'text');
    this.collection.add(items);
  },

  itemAdded() {
    this.model.set({
      assignee: '',
      text: ''
    });
  }
});
