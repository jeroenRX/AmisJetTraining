/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtimeline'],
 function(oj, ko, $) {
  
    function AboutViewModel() {
      var self = this;
      var items = ko.observableArray();
      self.timelineSeries = ko.computed(function () {
        return [{id: 's1', emptyText: 'No Data.', label:'Talent Launch Courses', items: items()}]
      });

      self.currentDateString = "Apr 17, 2018";
      var currentDate = new Date(self.currentDateString).toISOString();
      self.referenceObjects = [{value: currentDate}];

      $.getJSON("/../js/data/seriesOneData.json",
        function(data)
        {
          items(data);
        }
      );
    };

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);
