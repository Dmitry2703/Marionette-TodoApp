/**
 * @fileOverview Application
 */

import Bb from 'backbone';
import Mn from 'backbone.marionette';
import TodoModel from './models/todo.js';
import TodoView from './views/layout.js';

var initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

const App = Mn.Application.extend({
  region: '#app',
  onStart() {
    const todoView = new TodoView({
      collection: new Bb.Collection(initialData),
      model: new TodoModel()
    });
    this.showView(todoView);
  }
});

const app = new App();
app.start({ initialData: initialData });
