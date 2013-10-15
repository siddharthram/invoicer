Invoicer.Relationships = {
	create: function (customer, invoice) {
		RelationshipModel.insert({
			"customer": customer,
			"invoice": invoice
		});
	}
};
