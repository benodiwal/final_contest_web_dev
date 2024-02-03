const posts = JSON.parse(localStorage.getItem("posts")) || [];
const form = document.getElementById("form");
const input = document.getElementById("text-area");

form.addEventListener("submit", () => {
    const post = {
        content: input.value,
        liked: false,
        comments: [],
    };  
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
});

const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", () => {
        heartIcon.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
 });
});

const readContent = document.getElementById("read-content");
if (posts) {
    posts.forEach((p) => {
        const post = createPost(p.content);
        readContent.appendChild(post);
    });
}

function createPost(content) {
    const post = document.createElement("div");
    post.className = "post";
    const p = document.createElement("p");
    p.textContent = content;
    const div = document.createElement("div");
    const heartIcon = document.createElement("img");
    heartIcon.className = "heart-icon";
    heartIcon.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
    post.appendChild(p);
    div.appendChild(heartIcon);
    post.appendChild(div);
    return post;
}