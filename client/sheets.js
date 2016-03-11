// Declare client DWorksheet collection
DWorksheet = new Meteor.Collection("dworksheet");
 
// Bind dworksheetTemplate to dworksheet collection
Template.dwTemplate.dworksheet = function () {
    return DWorksheet.find();
};
 
// Handle dwForm events
Template.dwForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();
 
        // create the new movie
        var newSheet = {
            v_reg: tmpl.find("#vreg").value,
            v_name: tmpl.find("#vname").value,
            v_fleet: tmpl.find("#vfleet").value,
            opening_mileage: tmpl.find("#vopening").value,
            closing_mileage: tmpl.find("#vclosing").value,
            driver_morning: tmpl.find("#driverm").value,
            conductor_morning: tmpl.find("#conductorm").value,
            driver_afternoon: tmpl.find("#drivera").value,
            conductor_afternoon: tmpl.find("#conductora").value
        };
 
        // add the movie to the db
        Meteor.call(
            "addSheet",
            newSheet,
            function (err, result) {
                if (err) {
                    alert("Could not add sheet " + err.reason);
                }
            }
       );
 
    }
};