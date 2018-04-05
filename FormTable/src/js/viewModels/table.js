define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodel', 'ojs/ojcollectiontabledatasource', 'ojs/ojtable', 'ojs/ojgauge'],
 function(oj, ko, $) {
  
    function TableViewModel() {
      var self = this;
      self.url = "http://localhost:3000/evaluations";
      self.datasource = ko.observable();

      self.columns = [
        {"headerText": "Course", "field": "courseName", "sortable": "enabled"},
        {"headerText": "Date", "field": "courseDate", "sortable": "enabled"},
        {"headerText": "Instructor", "field": "courseInstructor", "sortable": "enabled"},
        {"headerText": "Student", "field": "studentName", "sortable": "enabled"},
        {"headerText": "Grade", "field": "grade", "sortable": "enabled"},
        {"headerText": "Remarks", "field": "courseRemarks", "sortable": "enabled"},
        {"headerText": "Rating", "field": "rating", "renderer": oj.KnockoutTemplateUtils.getRenderer("rating", true)},
      ];

      self.handleActivated = function(info) {
        self.datasource(new oj.CollectionTableDataSource(new self.evaluationsCollection()));
      };

      function parse(response) {
        return {
            id: response['id'],
            courseName: response['name'],
            courseDate: response['date'],
            courseInstructor: response['instructor'],
            studentName: response['studentname'],
            grade: response['grade'],
            courseRemarks: response['remarks'] !== "undefined" ? response['remarks'] : null, /*Additional*/
            rating: response['rating'],
        };
    };

      self.evaluationModel = oj.Model.extend({
        idAttribute: "id",
        parse: parse
      });

      self.evaluationsCollection = oj.Collection.extend({
        url: self.url,
        model: self.evaluationModel
      });
    }
    return new TableViewModel();
  }
);
