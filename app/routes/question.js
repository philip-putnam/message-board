import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(this.store.findRecord('question', params.question_id));
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
});
