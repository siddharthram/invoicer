Template.invoicer.logged_in = function() {
	return Meteor.user();
};
Template.invoicer.invoice_selected = function() {
	return Session.get("current_invoice");
}

Template.invoices_page.invoices = function() {
	return InvoiceModel.find({});
}

Session.set('adding_invoice', false);

Template.invoices_page.new_invoice = function () {
	return Session.equals('adding_invoice', true);
}

Template.invoices_page.has_invoices = function() {
	return InvoiceModel.find({}).count() ;
	//return true;
}

Template.invoices_page.events ({
	'click #new_invoice': function(e,t) {
		Session.set('adding_invoice', true);
		Meteor.flush();
		//focusText(t.find("#add-invoice"));
		//Invoicer.Invoices.create( new Date(), 100, "new invoice");

	},
	'click #bt_newinvoicebtn': function (e,t) {
		//alert ("saving");
		//e.preventDefault();
		//lines = t.find
		Invoicer.Invoices.create(t.find("#inputClient").value,t.find("#inputInvoiceId").value);
		//jQuery('.newinvoice_container').hide();
		Session.set('adding_invoice', false);
		//return false;
	},

	'click #bt_newline': function(e,t) {
		$('#tb_invoicelines tr:last').after('<tr> <button type="submit" id="bt_newline" class="btn-inverse"> Add line </button><td class="invoice_line" width="25%"><input type="text" id="quantity1"/></td><td class="invoice_line" width="25%"><select id="quantity2"> <option>minutes</option> <option>hours</option> <option>days</option> </select> </td> <td class="invoice_line" width="45%"> <input type="text" class="invoice_line" placeholder="price"/> </td> <td class="invoice_line" width="5%"> <input type="text" placeholder="total.."/> </td> </tr>');
 },

	'click .delete_invoice' : function() {
		alert("yo");
		if (confirm("Are you sure you want to remove"+ this.name )) {
			Invoicer.invoices.delete(this._id);
		}
	},
	'click .open_invoice' : function () {
		alert("yo");
		Invoicer.Invoices.change_current(this);
	},
});
function focusText(i) {
	i.focus();
	i.select();
}