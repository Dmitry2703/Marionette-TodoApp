/**
 * @fileOverview Model
 */

import Bb from 'backbone';

export default Bb.Model.extend({
  defaults: {
    assignee: '',
    text: ''
  },

  validate(attrs) {
    let errors = {};
    let hasError = false;

    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }

    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }

    if (hasError) {
      return errors;
    }
  }
});
