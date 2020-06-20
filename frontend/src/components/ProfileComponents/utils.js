module.exports = {
  daysBetween: (moment, dayOfCreation, dayOfEnding) => {
    const firstDate = moment([
      moment(dayOfCreation).year(),
      moment(dayOfCreation).month(),
      moment(dayOfCreation).date(),
      moment(dayOfCreation).hour()
    ]);
    const secondDate = moment([
      moment(dayOfEnding).year(),
      moment(dayOfEnding).month(),
      moment(dayOfEnding).date(),
      moment(dayOfEnding).hour()
    ]);
    const difference = secondDate.diff(firstDate, "days") + 1;
    const daysLeft = secondDate.diff(moment(), "days") + 1;
    const finalDiff = daysLeft / difference;
    return {
      percentage: Math.round(finalDiff * 100),
      days: daysLeft
    };
  }
};