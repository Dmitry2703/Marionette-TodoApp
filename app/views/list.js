/**
 * @fileOverview TodoList View
 */

import Mn from 'backbone.marionette';
import todoItem from '../templates/todoItem.jst';

const Todo = Mn.View.extend({
  tagName: 'li',
  template: todoItem
});

export default Mn.CollectionView.extend({
  tagName: 'ul',
  childView: Todo
});
