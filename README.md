## Project Description: Countdown Timer
This project is a simple countdown timer web application that allows users to input a target date, and then displays the remaining time in years, months, days, hours, minutes, and seconds. The application is built using HTML, CSS, and JavaScript.

## Files and Their Roles:
### index.html
This file contains the structure of the web page. 
It includes an input field for the user to select a target date and displays the countdown timer with placeholders for years,
months, days, hours, minutes, and seconds.

### style.css
This file contains the styling for the web page. 
It ensures that the page is visually appealing with a background image, centered content,
and styled input and timer elements. The CSS also includes responsive design elements to ensure the timer looks good on different screen sizes.

#### main.js
This file contains the JavaScript logic for the countdown timer. It handles the following:
- Fetching the target date input by the user.
- Calculating the remaining time until the target date.
- Displaying the remaining time in years, months, days, hours, minutes, and seconds.
- Validating the target date to ensure it is in the future.
- Reloading the page if an invalid date is entered.

## How It Works:
### User Input:
The user selects a target date using the date input field.

### Countdown Calculation:
The JavaScript function countDown calculates the difference between the current date and the target date.
It converts this difference into years, months, days, hours, minutes, and seconds.

### Display:
The calculated time units are displayed on the web page, updating every second.

### Validation:
If the user enters a date in the past, an alert is shown, and the page reloads to prompt the user to enter a valid date.
