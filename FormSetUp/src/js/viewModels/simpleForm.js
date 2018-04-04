define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojdatetimepicker',
'ojs/ojselectcombobox', 'ojs/ojinputnumber', 'ojs/ojslider', 'ojs/ojbutton'],
 function(oj, ko, $) {
  
    function SimpleFormViewModel() {
      var self = this;

      self.courseName = ko.observable();
      self.courseDate = ko.observable();
      self.courseInstructor = ko.observable();
      self.instructors = ko.observable();
      self.studentName = ko.observable();
      self.studentGrade = ko.observable();
      self.courseRemarks = ko.observable();
      self.courseRating = ko.observable();

      self.instructors = [
        {value: 'JR', label: 'Jeroen Rijnboutt'},
        {value: 'LB', label: 'Laura Broekstra'}
      ];

      self.submitForm = function() {
        alert("Form submitted!");
      }
    }

    return new SimpleFormViewModel();
  }
);
