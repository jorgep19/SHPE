function CompanyDataVM() {
	
	var self = this;
	// --- properties

	self.summaryTemplate = "companySummary";
	self.glanceTemplate = "companyGlance";
	self.detailTemplate = "companyDetail";

	self.name = ko.observableArray(); 
	self.id = ko.observableArray();
	self.industries = ko.observableArray();
	self.logoUrl = ko.observableArray();
	self.founded = ko.observableArray();
	self.slogan = ko.observableArray();
	self.facts = ko.observableArray();
	self.linkedin = ko.observable();
	self.twitterlink = ko.observable();
	self.fblink = ko.observable();
	self.rssfeed = ko.observable();
	self.lookfor = ko.observableArray();
	self.overview = ko.observableArray();
	self.mission = ko.observableArray();
	self.goals = ko.observableArray();
	self.businessModel = ko.observableArray();
	self.applylink = ko.observable();
	self.news = ko.observable();
	
	// --- public functions

	self.init = function (company) {
	
		self.name(self.parseLines(company.name)); 
		self.id(self.parseLines(company.id));
		self.industries(self.parseLines(company.industries));
		self.logoUrl(self.parseLines(company.logoUrl));
		self.founded(self.parseLines(company.founded));
		self.slogan(self.parseLines(company.slogan));
		self.facts(self.parseLines(company.facts));
		self.linkedin(company.linkedin);
		self.twitterlink(company.twitterlink);
		self.fblink(company.fblink);
		self.rssfeed(company.rssfeed);
		self.lookfor(self.parseLines(company.lookfor));
		self.overview(self.parseLines(company.overview));
		self.mission(self.parseLines(company.mission));
		self.goals(self.parseLines(company.goals));
		self.businessModel(self.parseLines(company.businessModel));
		self.applylink(company.applylink);
		self.news(self.parseNewsLink(company.name));
	}; 
	
	self.parseLines = function(str){
		if(!str || str === undefined){
			return " ";
		}
		
		var lines = str.split("-");
			
		if(lines.length > 1){
			
			if(str.charAt(0) === "-"){
				lines[0] = "•" + lines[0];
			}
			
			for (var i=1; i < lines.length; i++){
				lines[i] = "•" + lines[i];
			}
		
			return lines;
		}
		else{
			return [str];
		}
		
	};
	
	self.parseNewsLink = function(compName){
		if(!compName || compName === undefined){
			return " ";
		}
		
		var googleNewsQueryUrl = "http://www.google.com/news?q=";
		var wordsInCompName = compName.split(" ");
		
		if(wordsInCompName.length > 1){
			
			var companyQuery = "";
			
			for (var i=0; i < wordsInCompName.length; i++){
				companyQuery = companyQuery + wordsInCompName[i] + "+";
			}
			
			googleNewsQueryUrl = googleNewsQueryUrl + companyQuery;
			return googleNewsQueryUrl;
		}
		else{
			googleNewsQueryUrl = googleNewsQueryUrl + compName;
			return googleNewsQueryUrl;
		}
	};
	
	self.glanceClicked = function (company) {
		$.mobile.changePage("#" + self.glanceTemplate);
	};
	
	self.detailClicked = function (company) {
		$.mobile.changePage("#" + self.detailTemplate);
	};
	  
	return self;
}

function CompanyObject(data){
		
	// Create variable self to keep local scope
	var self = this; 
		
	self.name = data.name; 
	self.id = data.id;
	self.industries = data.industries;
	self.logoUrl = data.logo;
	self.founded = data.founded;
	self.slogan = data.slogan;
	self.facts = data.facts;
	self.linkedin = data.linkedin;
	self.twitterlink = data.twitterlink;
	self.fblink = data.fblink;
	self.rssfeed = data.rssfeed;
	self.lookfor = data.lookfor;
	self.overview = data.overview;
	self.mission = data.mission;
	self.goals = data.goals;
	self.businessModel = data.businessModel;
	self.applylink = data.applylink;
	self.news = data.news;
	
	// return the self as a Company object
	return self;	
} 