
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Light mode icon
    }

    // Add event listener for the toggle button
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙'; // Toggle icon

        // Save theme preference to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
