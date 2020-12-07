export const head = () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
        <h1 class = "heading">Blogs.com</h1>
    </div>
    <div>
        <nav>
            <a href = "#" class = "about">About Us</a>
            <a href = "#" class = "contact">Contact Us</a>
        </nav>
    </div>
    `;
    div.className = "header";
    return div;
}