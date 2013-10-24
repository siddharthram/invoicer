Template.invoicer.logged_in = function() {
	return Meteor.user();
};
Template.invoicer.invoice_selected = function() {
	return Session.get("current_invoice");
}
Template.invoices_page.has_invoices = function() {
	return InvoicesModel.find({}).count();
}
Template.invoices_page.invoices = function() {
	return InvoicesModel.find({});
}

Session.set('adding_invoice', false);

Template.invoices_page.new_invoice = function () {
	return Session.equals('adding_invoice', true);
}


Template.invoices_page.events ({
	'click #new_invoice': function(e,t) {
		Session.set('adding_invoice', true);
		Meteor.flush();
		focusText(t.find("#add-invoice"));
		//Invoicer.Invoices.create( new Date(), 100, "new invoice");

	},

	'click .delete_invoice' : function() {
		alert("yo");
		if (confirm("Are you sure you want to remove"+ this.name )) {
			Invoicer.invoices.delete(this._id);
		}
	},
	'click .open_invoice' : function () {
		alert("yo")
		Invoicer.Invoices.change_current(this);
	}

});
function focusText(i) {
	i.focus();
	i.select();
}