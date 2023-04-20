function tutorWageCalculator(timesheetString, level){

    const levels = {
        1 : {
            hourlyRate : 75,
            overtimeRate : 75 + (75 * 0.07)
        },
        2 : {
            hourlyRate : 90,
            overtimeRate : 90 + (90 * 0.09)
        }, 
        3 : {
            hourlyRate : 105,
            overtimeRate : 105 + (105 * 0.12)
        }
    }
        var level = levels[level]
        var timesheet = timesheetString.split('-')
        var hoursWorked = parseInt(0);
        console.log(timesheet.length)
        if(timesheet.length > 7 || timesheet.length < 5){
                return "Invalid timesheet"
         } for(var i = 0; i < timesheet.length; i++){
                 hoursWorked += parseInt(timesheet)
         }

            var wage = hoursWorked * level.hourlyRate
            return wage
}
    