
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomposite', 'jet-composites/achievement-overview/loader', 'jet-composites/course-badge/loader'],
  function (oj, ko, $) {

    function BadgesViewModel() {
      var self = this;

      self.badgeHeader = "You did great!"

      self.courses = [
        { "name": "Java", "grade": "9"},
        { "name": "JavaScript", "grade": "6"},
        { "name": "Agile", "grade": "4"},
        { "name": "APIs", "grade": "8"},
        { "name": "REST", "grade": "7"}
      ];

      self.badgeSlot = function (grade) {
        if (grade > 6 && grade < 8) {
          return 'okGrade';
        } else if (grade >= 8) {
          return 'highGrade';
        } else {
          return;
        }
      }
    }
    return new BadgesViewModel();
  }
);
