Invoicer.Invoices = {
	create: function(name,  invoice_id) {
		InvoiceModel.insert({
			"client": name,
			"i_id": invoice_id
		});
	}
};
