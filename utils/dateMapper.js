export const dateMapper = (date = 'yyyy-mm-dd') => {
  const arrOfMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let arrFromDate = date.split('-');
  let year;
  let month;
  let day;

  if (arrFromDate.length > 0) {
    year = arrFromDate[0];
    month = arrOfMonths[arrFromDate[1] - 1];
    day = arrFromDate[2];
  }

  return { year, month, day };
};
