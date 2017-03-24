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
      var author = this.get('author');
      if (!author) {
        author = 'Anon';
      }
      var additionalNotes = this.get('additionalNotes');
      if (!additionalNotes) {
        additionalNotes = "no additional notes provided";
      }
      var content = this.get('content');
      if (!content) {
        alert("You must ask a question!");
      } else {
        var params = {
          author: author,
          content: content,
          additionalNotes: additionalNotes,
        };
        this.set('addNewQuestionFormShowing', false);
        this.sendAction('addQuestion', params);
      }
    }
  }
});
