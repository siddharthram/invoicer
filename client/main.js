Template.invoicer.logged_in = function() {
	return Meteor.user();
};
Template.invoicer.invoice_selected = function() {
	return Session.get("current_invoice");
}
