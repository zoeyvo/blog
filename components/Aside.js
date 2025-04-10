import { asideLinks } from './links.js';

export default function Aside() {
    return `
        <h2>LINKS</h2>
        <ul>
            ${asideLinks.map(link => `<li><a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a></li>`).join('')}
        </ul>
    `;
}
