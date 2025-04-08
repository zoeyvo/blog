import { asideLinks } from './links.js';

export default function Aside() {
    return `
        <aside>
            <div class="imgHeader">
                <h2>resources <img src="assets/hearts.gif" alt="hearts" class="icon" height="30"></h2>
            </div>
            <ul>
                ${asideLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
            </ul>
        </aside>
    `;
}
