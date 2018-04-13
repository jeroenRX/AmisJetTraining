/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "text!./../data/chart.json",
  "text!./../data/hours.json",
  "ojs/ojknockout",
  "ojs/ojbutton",
  "ojs/ojchart",
  "ojs/ojtoolbar"
], function(oj, ko, $, data, hours) {
  function DashboardViewModel() {
    var self = this;

    var groups = JSON.parse(data); //"Week 1", "Week 2"];

    function getValue() {
      return 10 + Math.round(Math.random() * 50);
    }

    var workHours = JSON.parse(hours);
    function getHourValues(topic) {
      var items = [];
      for (var g = 0; g < workHours.length; g++) {
        if (workHours[g][topic]) {
          for (var h = 0; h < workHours[g][topic].length; h++) {
            items.push(workHours[g][topic][h]);
          }
        }
      }
      return items;
    }

    var series = [
      { name: "Coding", items: getHourValues("coding") },
      { name: "Architecture", items: getHourValues("architecture") },
      { name: "Meetings", items: getHourValues("meetings") },
      { name: "Fun", items: getHourValues("fun") }
    ];

    self.seriesValue = ko.observableArray(series);
    self.groupsValue = ko.observableArray(groups);
    self.stackValue = ko.observable("off");
    self.orientationValue = ko.observable("vertical");

    self.updateButtonClick = function(event) {
      for (var s = 0; s < series.length; s++) {
        for (var g = 0; g < series[s].items.length; g++) {
          if (Math.random() < 0.3) series[s].items[g] = getValue();
        }
      }
      self.seriesValue(series);
    };

    self.seriesButtonClick = function(event) {
      if (series.length <= 4) {
        series.push({ name: "Training", items: getHourValues("training") });
      } else {
        series.pop();
      }
      self.seriesValue(series);
    };

    self.groupButtonClick = function(event) {
      if (groups.length <= 2) {
        groups.push("Week 3");
        for (var s = 0; s < series.length; s++) {
          series[s].items.push(getValue());
        }
      } else {
        groups.pop();
        for (var s = 0; s < series.length; s++) {
          series[s].items.pop();
        }
      }
      self.seriesValue(series);
      self.groupsValue(groups);
    };
  }
  return new DashboardViewModel();
});
