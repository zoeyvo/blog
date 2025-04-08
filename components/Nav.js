export default function Nav() {
    return `
        <nav aria-label="Main Navigation">
            <ul>
                <li><a href="index.html"><img src="assets/world.png" alt="home" class="icon" height="25"></a></li>
                <li><a href="projects.html"><img src="assets/folder-type.png" alt="projects" class="icon" height="33"></a></li>
                <li><a href="posts.html"><img src="assets/warning.png" alt="posts" class="icon" height="29"></a></li>
                <li><a href="about.html"><img src="assets/person.png" alt="about" class="icon" height="25"></a></li>
            </ul>
        </nav>
    `;
}
