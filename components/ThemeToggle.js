export default function ThemeToggle() {
    const button = document.createElement('button');
    button.className = 'toggle-theme';
    button.id = 'themeToggle';

    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        document.body.classList.add('light-mode');
        button.textContent = 'Switch to Dark Mode';
    } else {
        button.textContent = 'Switch to Light Mode';
    }

    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        button.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';

        // Save the theme to localStorage
        localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');
    });

    return button;
}
