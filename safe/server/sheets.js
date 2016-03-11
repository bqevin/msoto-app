// Declare server DWorksheet collection
DWorksheet = new Meteor.Collection("dworksheet");
 
// Seed the movie database with a few DWorksheet
Meteor.startup(function () {
    if (DWorksheet.find().count() === 0) {
         DWorksheet.insert({v_reg: "KCB 234A", v_name: "City Shuttle", v_fleet: "001", opening_mileage: "234786765", closing_mileage: "234796765", driver_morning: "12000", conductor_morning: "30000", driver_afternoon: "15700", conductor_afternoon: "80600"});
    }
});