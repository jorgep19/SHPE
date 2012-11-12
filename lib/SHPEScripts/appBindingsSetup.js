ko.virtualElements.allowedBindings.updateListviewOnChange = true;
ko.bindingHandlers.updateListviewOnChange = {
  update: function (element, valueAccessor) {
    ko.utils.unwrapObservable(valueAccessor());  //grab dependency

    var listview = $(element).parents()
                             .andSelf()
                             .filter("[data-role='listview']");

    if (listview) {
      try {
        $(listview).listview('refresh');
      } catch (e) {
        // if the listview is not initialised, the above call with throw an exception
        // there doe snot appear to be any way to easily test for this state, so
        // we just swallow the exception here.
      }
    }
  }
};

// create the various view models
var companySearchVM = new CompanySearchVM(),
companyDataVMAttached = new CompanyDataVM();
companySearchVM.init(companiesData); 
$.mobile.defaultPageTransition = "fade";

$(document).ready(function () {
  // bind each view model to a jQueryMobile page
  ko.applyBindings(companySearchVM, document.getElementById("companies"));
  ko.applyBindings(companyDataVMAttached, document.getElementById("companySummary"));
  ko.applyBindings(companyDataVMAttached, document.getElementById("companyGlance"));
  ko.applyBindings(companyDataVMAttached, document.getElementById("companyDetail"));
});




