import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  actions: {
    toggleAnswerFormShowing: function() {
      if (!this.formShowing) {
        this.set('formShowing', true);
      } else {
        this.set('formShowing', false);
      }
    },
    addAnswer: function() {
      var author = this.get('author');
      if (!author) {
        author = "anon";
      }
      var content = this.get('content')
      if (!content) {
        alert("You must enter an answer!")
      } else {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
          question: this.get('question')
        };
        this.set('addNewAnswerFormShowing', false);
        this.sendAction('addAnswer', params);
      }
    }
  }
});
