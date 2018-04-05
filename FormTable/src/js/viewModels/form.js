define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojdatetimepicker',
'ojs/ojselectcombobox', 'ojs/ojinputnumber', 'ojs/ojslider', 'ojs/ojbutton'],
  function (oj, ko, $) {

    function FormViewModel() {
      var self = this;
      self.url = "http://localhost:3000/evaluations";

      self.courseName = ko.observable();
      self.courseDate = ko.observable();
      self.courseInstructor = ko.observable();
      self.studentName = ko.observable();
      self.studentGrade = ko.observable();
      self.courseRemarks = ko.observable();
      self.courseRating = ko.observable();
      self.thankYou = ko.observable();

      self.instructors = [
        { value: 'Jeroen Rijnboutt', label: 'Jeroen Rijnboutt' },
        { value: 'Laura Broekstra', label: 'Laura Broekstra' }
      ];

      self.submitForm = function () {
        var body = '{"name": "' + self.courseName() + '", "date": "' + self.courseDate() + '", "instructor": "' + self.courseInstructor() + '", "studentname": "'
          + self.studentName() + '", "grade":' + self.studentGrade() + ', "remarks": "' + self.courseRemarks() + '", "rating":' + self.courseRating() + '}';

        $.ajax({
          type: "POST",
          url: self.url,
          data: body,
          contentType: "application/json"
        }).done(function () {
          self.courseName('');
          self.courseDate('');
          self.courseInstructor('');
          self.studentName('');
          self.studentGrade(null);
          self.courseRemarks('');
          self.courseRating(null);
          /* Additional */
          self.thankYou("Thanks for filling out our evaluation!");
          setTimeout(function () {
            self.thankYou('')
          }, 3000);
          /* Additional */
        });
      }
    }
    return new FormViewModel();
  }
);
