import { asideLinks } from './links.js';
import ThemeToggle from './ThemeToggle.js';

export default function Aside() {
    const themeToggle = ThemeToggle(); // Create the theme toggle button
    document.body.appendChild(themeToggle); // Add it to the body

    return `
        <aside>
            <h2>LINKS</h2>
            <ul>
                ${asideLinks.map(link => `<li><a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a></li>`).join('')}
            </ul>
        </aside>
    `;
}
