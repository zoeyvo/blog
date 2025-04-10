export default function Nav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    return `
        <ul>
            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">
                <img src="assets/world.png" alt="home" class="icon" height="25">
            </a></li>
            <li><a href="projects.html" class="${currentPage === 'projects.html' ? 'active' : ''}">
                <img src="assets/folder-type.png" alt="projects" class="icon" height="33">
            </a></li>
            <li><a href="posts.html" class="${currentPage === 'posts.html' ? 'active' : ''}">
                <img src="assets/warning.png" alt="posts" class="icon" height="29">
            </a></li>
            <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">
                <img src="assets/person.png" alt="about" class="icon" height="25">
            </a></li>
        </ul>
    `;
}
