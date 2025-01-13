// Formats a number as a currency string
export function formatCurrency(value) {
  // Create a formatter for the currency
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

// Formats a date string as a human-readable date
export function formatDate(dateStr) {
  // Create a formatter for a date string
  return new Intl.DateTimeFormat("en", {
    day: "numeric", // Set the day to numeric
    month: "short", // Set the month to short
    hour: "2-digit", // Set the hour to 2-digits
    minute: "2-digit", // Set the minute to 2-digits
  }).format(new Date(dateStr));
}

// Calculates the time difference in minutes between two dates
export function calcMinutesLeft(dateStr) {
  // Get the current time in milliseconds
  const d1 = new Date().getTime();
  // Get the time of the given date string in milliseconds
  const d2 = new Date(dateStr).getTime();
  // Calculate the difference in minutes and round to the nearest whole number
  return Math.round((d2 - d1) / 60000);
}
