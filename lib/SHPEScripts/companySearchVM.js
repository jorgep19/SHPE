function CompanySearchVM() {
	/// <summary>
	/// A view model that renders the companies that are in the dataBase.
	/// </summary>
	var self = this;
	// --- properties
	self.companiesAvailable = ko.observableArray();

	// --- public functions
	self.init = function (companiesAvailable) {
		var companyObjects = ko.utils.arrayMap(companiesAvailable, function(companyData){
												return new CompanyObject(companyData);
												});
		self.companiesAvailable(companyObjects);
	};

	self.companyClicked = function (company) {
		// navigate to the company pages
		companyDataVMAttached.init(company);
		$.mobile.changePage("#" + companyDataVMAttached.summaryTemplate);
	};
	
	return self;
}