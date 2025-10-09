@dashboard2
Feature: Dashboard

@1
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
    Given I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

@2
Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title 2
    Given I open "Dashboard" page
    Then Page title should "not be equal to" "Appointment Planner - Syncfusion Angular Componentss Showcase App"