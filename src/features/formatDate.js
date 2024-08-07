export function formatDate(dateString) {
  let dateObject = new Date(dateString);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let day = dateObject.getDate();
  let month = monthNames[dateObject.getMonth()];
  let year = dateObject.getFullYear();

  return [day, month, year];
}
