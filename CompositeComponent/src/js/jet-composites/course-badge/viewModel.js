/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';
    
    function ExampleComponentModel(context) {
        var self = this;
        self.composite = context.element;
        //Example observable
        self.messageText = ko.observable('Hello from Example Component');

        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;

            //Parse your component properties here 

        });
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //CCDemoNameBadgeComponentModel.prototype.activated = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.attached = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.bindingsApplied = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});