const addDateSuffix = (date) => {
    let newDate = date.toString();

    const end = newDate.charAt(newDate.length - 1);

    if (end === '1' && newDate !== '11') {
        newDate = `${newDate}st`;
    } else if (end === '2' && newDate !== '12') {
        newDate = `${newDate}nd`;
    } else if (end === '3' && newDate !== '13') {
        newDate = `${newDate}rd`;
    } else {
        newDate = `${newDate}th`;
    }
    return newDate;
};

module.exports = (
    timeFormat,
    { monthMat = 'abbr', dateSuffix = true } = {}
) => {
    const months = {
      0: monthMat === "abbr" ? "Jan" : "January",
      1: monthMat === "abbr" ? "Feb" : "February",
      2: monthMat === "abbr" ? "Mar" : "March",
      3: monthMat === "abbr" ? "Apr" : "April",
      4: monthMat === "abbr" ? "May" : "May",
      5: monthMat === "abbr" ? "Jun" : "June",
      6: monthMat === "abbr" ? "Jul" : "July",
      7: monthMat === "abbr" ? "Aug" : "August",
      8: monthMat === "abbr" ? "Sep" : "September",
      9: monthMat === "abbr" ? "Oct" : "October",
      10: monthMat === "abbr" ? "Nov" : "November",
      11: monthMat === "abbr" ? "Dec" : "December",
    };

    const timeObj = new Date(timeFormat);
    const formattedMon = months[timeObj.getMonth()];

    const dayMonth = dateSuffix
        ? addDateSuffix(timeObj.getDate())
        : timeObj.getDate();
    
    const year = timeObj.getFullYear();
    let hour =
        timeObj.getHours() > 12
            ? Math.floor(timeObj.getHours() - 12)
            : timeObj.getHours();
    
    if (hour === 0) {
        hour = 12;
    }

    const minutes = (timeObj.getMinutes() < 10 ? '0' : '') + timeObj.getMinutes();
    const meridian = timeObj.getHours >= 12 ? 'pm' : 'am';

    const formattedTimeObj = `${formattedMon} ${dayMonth}, ${year} at ${hour}:${minutes} ${meridian}`
    return formattedTimeObj;
}