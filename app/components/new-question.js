import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestionFormShowing: false,
  actions: {
    toggleFormShowing: function() {
      if (!this.addNewQuestionFormShowing) {
        this.set('addNewQuestionFormShowing', true);
      } else {
        this.set('addNewQuestionFormShowing', false);
      }
    },
    addQuestion: function() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        additionalNotes: this.get('additionalNotes'),
      };
      this.set('addNewQuestionFormShowing', false);
      this.sendAction('addQuestion', params);
    }
  }
});
