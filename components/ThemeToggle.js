document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Set dark mode as the default
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️'; // Light mode icon
    } else {
        body.classList.add('light-mode');
        toggleButton.textContent = '🌙'; // Dark mode icon
    }

    // Add event listener for the toggle button
    toggleButton.addEventListener('click', () => {
        const isLightMode = body.classList.toggle('light-mode');
        toggleButton.textContent = isLightMode ? '🌙' : '☀️'; // Toggle icon

        // Save theme preference to localStorage
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });
});
