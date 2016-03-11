Meteor.methods({
    addSheet: function (newSheet) {
        // Perform form validation
        if (newSheet.v_reg == "") {
            throw new Meteor.Error(413, "Missing Vehicle Registration!");
        }
        if (newSheet.v_name == "") {
            throw new Meteor.Error(413, "Missing Vehicle Name!");
        }
        if (newSheet.v_fleet == "") {
            throw new Meteor.Error(413, "Missing Fleet Number!");
        } 
        if (newSheet.opening_mileage == "") {
            throw new Meteor.Error(413, "Missing Opening Mileage!");
        }
        if (newSheet.closing_mileage == "") {
            throw new Meteor.Error(413, "Missing Closing Mileage!");
        }
        if (newSheet.driver_morning == "") {
            throw new Meteor.Error(413, "Missing Driver's morning shift!");
        }
        if (newSheet.conductor_morning == "") {
            throw new Meteor.Error(413, "Missing Conductor's morning shift!");
        }
        if (newSheet.driver_afternoon == "") {
            throw new Meteor.Error(413, "Missing Driver's afternoon shift!");
        }
        if (newSheet.conductor_afternoon == "") {
            throw new Meteor.Error(413, "Missing Conductor's afternoon shift!");
        }
        // Insert Sheet (simulate on client, do it on server)
        return DWorksheet.insert(newSheet);
    }
 
});