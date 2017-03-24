import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    addAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    }
  }
});
