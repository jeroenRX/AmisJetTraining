/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojdatetimepicker',
'ojs/ojselectcombobox', 'ojs/ojinputnumber', 'ojs/ojslider', 'ojs/ojbutton'],
 function(oj, ko, $) {
  
    function EvaluationViewModel() {
      var self = this;
      self.courseName = ko.observable();
      self.courseDate = ko.observable();
      self.courseInstructor = ko.observable();
      self.studentName = ko.observable();
      self.studentGrade = ko.observable();
      self.courseRemarks = ko.observable();
      self.courseRating = ko.observable();

      self.instructors = [
        {value: 'Jeroen Rijnboutt', label: 'Jeroen Rijnboutt'},
        {value: 'Laura Broekstra', label: 'Laura Broekstra'}
      ];

      self.submitForm = function() {
        alert("Form submitted!");
      }
    }
    return new EvaluationViewModel();
  }
);
