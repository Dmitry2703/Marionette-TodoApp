/**
 * @fileOverview Add Todo Form View
 */

import Mn from 'backbone.marionette';
import addTodo from '../templates/addTodo.jst';

export default Mn.View.extend({
  tagName: 'form',
  template: addTodo,

  ui: {
    assignee: '#id_assignee',
    text: '#id_text',
  },

  triggers: {
    submit: 'add:todo:item'
  },

  modelEvents: {
    change: 'render'
  }
});
