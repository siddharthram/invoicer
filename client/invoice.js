Invoicer.Invoices = {
	create: function(date, amount,  description) {
		InvoicesModel.insert({
			"date": date,
			"amount": amount,
			"description": description
		});
	}
};
