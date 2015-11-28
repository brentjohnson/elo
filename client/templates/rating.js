
Template.rating.helpers({
	players: function() {
		return Players.find({}, {sort: {rating : -1}});
	}
});

Template.rating.events({
	'click button': function () {
	  // increment the counter when button is clicked
	  Session.set('counter', Session.get('counter') + 1);
	}
});

