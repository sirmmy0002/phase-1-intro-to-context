function createEmployeeRecord(empArr){
    return {
        firstName: empArr[0],
        familyName: empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeesArr){
    return employeesArr.map(empRecord => createEmployeeRecord(empRecord))
}
function createTimeInEvent(empObj, dateStamp){
    let newTimeInEvent = {
        type: "TimeIn",
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(-4))
    }
    empObj['timeInEvents'].push(newTimeInEvent);
    return empObj;
}
