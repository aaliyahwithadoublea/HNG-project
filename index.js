/* Function to update time and day */
function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    // Get current date and time
    const now = new Date();
    const utcString = now.toUTCString();
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    // Update content of elements
    currentTimeElement.textContent = `Current Time (UTC): ${utcString}`;
    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
}

// Initial call to display current time and day
updateTimeAndDay();
// Update time and day every minute
setInterval(updateTimeAndDay, 60000);  // Update every minute
