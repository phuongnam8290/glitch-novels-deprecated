function getFirstDateInWeek(date) {
    let firstDateInWeek = new Date(date);
    firstDateInWeek.setDate(date.getDate() - date.getDay() + 1);

    return firstDateInWeek;
}

function getLastDateInWeek(date) {
    let lastDateInWeek = new Date(date);
    lastDateInWeek.setDate(date.getDate() + (7 - date.getDay()));

    return lastDateInWeek;
}

export function createWeekData(dateInWeek, isWeekSelected) {
    let weekData = {};
    weekData.firstDate = getFirstDateInWeek(dateInWeek);
    weekData.lastDate = getLastDateInWeek(dateInWeek);
    weekData.selectedDate = weekData.firstDate;
    weekData.isWeekSelected = isWeekSelected;

    return weekData;
}