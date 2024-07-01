/* Function to update time and day */
function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    // Get current date and time in WAT (UTC + 1)
    const now = new Date();
    const watOffset = 1; // UTC+1 for West African Time
    const watTime = new Date(now.getTime() + watOffset * 60 * 60 * 1000);
    
    // Format time as HH:mm:ss
    const watTimeString = watTime.toLocaleTimeString('en-US', { hour12: false });

    // Get current day of the week
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    // Update content of elements
    currentTimeElement.textContent = `Current Time (GMT): ${watTimeString}`;
    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
}

// Initial call to display current time and day
updateTimeAndDay();
// Update time and day every minute
setInterval(updateTimeAndDay, 1000);  // Update every minute

