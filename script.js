function updateDateTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const options = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('en-US', options).format(now);
    
    currentTimeUTC.textContent = now.toISOString().replace('T', ' ').replace('Z', ' UTC');
    // currentTimeUTC.textContent = now.toUTCString();
    currentDay.textContent = day;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});