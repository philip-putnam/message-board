import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    toggleEditFormShow() {
      if (!this.editFormShow) {
        this.set('editFormShow', true);
      } else {
        this.set('editFormShow', false);
      }
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        additionalNotes: this.get('additionalNotes')
      };
      this.set('editFormShow', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
