Invoicer.Invoice = {
	create: function(date, amount,  description) {
		InvoiceModel.insert({
			"date": date,
			"amount": amount,
			"description": description
		});
	}
};
