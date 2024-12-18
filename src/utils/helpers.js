// Formats a value as a currency string
export function formatCurrency(value) {
  // Create a formatter for the Euro currency
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
  return new Intl.NumberFormat("en", {
    // Set the style to "currency"
    style: "currency",
    // Set the currency code to "EUR"
    currency: "EUR",
  }).format(value);
}

// Formats a date string as a human-readable date
export function formatDate(dateStr) {
  // Create a formatter for a date string
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  return new Intl.DateTimeFormat("en", {
    // Set the day to numeric
    day: "numeric",
    // Set the month to short
    month: "short",
    // Set the hour to 2-digits
    hour: "2-digit",
    // Set the minute to 2-digits
    minute: "2-digit",
  }).format(new Date(dateStr));
}

// Calculates the time difference in minutes between two dates
export function calcMinutesLeft(dateStr) {
  // Get the current time in milliseconds
  const d1 = new Date().getTime();
  // Get the time of the given date string in milliseconds
  const d2 = new Date(dateStr).getTime();
  // Calculate the difference in minutes and round to the nearest whole number
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return Math.round((d2 - d1) / 60000);
}
