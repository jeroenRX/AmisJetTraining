/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore", "knockout", "jquery"], function(oj, ko, $) {
  function CoursesViewModel() {
    var self = this;

    this.days = ko.observableArray([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ]);
    this.fields = ko.observableArray([
      "Java",
      "JavaScript",
      "Agile",
      "APIs",
      "REST"
    ]);
    this.hours = ko.observableArray(["1", "2", "3", "4", "5"]);
    this.schedule = ko.observableArray([]);

    this.chosenDay = ko.observable();
    this.chosenField = ko.observable();
    this.chosenNrOfHours = ko.observable();
    this.summaryVisible = function() {
      return this.chosenDay() && this.chosenField() && this.chosenNrOfHours();
    };

    this.summary = ko.computed(function() {
      return (
        this.chosenDay() +
        " I will work on " +
        this.chosenField() +
        " for " +
        this.chosenNrOfHours() +
        " hours!"
      );
    }, this);

    self.addWork = function() {
      self.schedule.push({
        day: this.chosenDay(),
        field: this.chosenField(),
        nrofhours: this.chosenNrOfHours()
      });
    };
  }

  return new CoursesViewModel();
});
